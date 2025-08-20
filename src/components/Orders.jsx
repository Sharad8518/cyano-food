import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { orders } from "../services/api";

const ColumnHeader = ({ children }) => (
  <th
    style={{
      textAlign: "left",
      fontWeight: 600,
      color: "#111827",
      padding: "10px 12px",
      borderBottom: "1px solid #e5e7eb",
      background: "#f9fafb",
    }}
  >
    {children}
  </th>
);

const RowCell = ({ children }) => (
  <td
    style={{
      padding: "10px 12px",
      borderBottom: "1px solid #f1f5f9",
      color: "#374151",
    }}
  >
    {children}
  </td>
);

const OrdersTable = ({ data }) => (
  <div
    style={{ overflowX: "auto", border: "1px solid #eef2f7", borderRadius: 12 }}
  >
    <table
      style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}
    >
      <thead>
        <tr>
          <ColumnHeader>Invoice No.</ColumnHeader>
          <ColumnHeader>Order ID</ColumnHeader>
          <ColumnHeader>No. of Products</ColumnHeader>
          <ColumnHeader>Customer Name</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Ordered Date</ColumnHeader>
          <ColumnHeader>Status</ColumnHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((o) => (
          <tr key={o.id}>
            <RowCell>{o.invoiceNo}</RowCell>
            <RowCell>{o.id}</RowCell>
            <RowCell>{o.numProducts}</RowCell>
            <RowCell>{o.customerName}</RowCell>
            <RowCell>₹ {o.amount.toLocaleString()}</RowCell>
            <RowCell>{new Date(o.orderedDate).toDateString()}</RowCell>
            <RowCell style={{ textTransform: "capitalize" }}>
              {o.status.replaceAll("_", " ")}
            </RowCell>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const OrdersPage = () => {
  const [all, setAll] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [pickup, setPickup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const [a, d, p] = await Promise.all([
          orders.getAll(),
          orders.getByType("delivery"),
          orders.getByType("pickup"),
        ]);
        if (!mounted) return;
        setAll(a.orders || []);
        setDelivery(d.orders || []);
        setPickup(p.orders || []);
      } catch (e) {
        setError(e.message || "Failed to load orders");
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div style={{ padding: 16 }}>Loading orders…</div>;
  }
  if (error) {
    return <div style={{ padding: 16, color: "#b91c1c" }}>{error}</div>;
  }

  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
        All Orders
      </h2>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Orders</TabsTrigger>
          <TabsTrigger value="delivery">Delivery Orders</TabsTrigger>
          <TabsTrigger value="pickup">Pick-up Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <OrdersTable data={all} />
        </TabsContent>
        <TabsContent value="delivery">
          <OrdersTable data={delivery} />
        </TabsContent>
        <TabsContent value="pickup">
          <OrdersTable data={pickup} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
