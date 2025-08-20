import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { orders } from "../services/api";

const fieldStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  outline: "none",
};

const labelStyle = {
  fontSize: 13,
  color: "#111827",
  fontWeight: 600,
  marginBottom: 6,
};

const OrderModal = ({ open, onOpenChange, defaultProduct }) => {
  const [productName, setProductName] = useState(defaultProduct?.name || "");
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("delivery");
  const [customerName, setCustomerName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Keep product name in sync when modal opens for different items
    setProductName(defaultProduct?.name || "");
  }, [defaultProduct, open]);

  const closeTimerRef = useRef(null);
  const [idempotencyKey, setIdempotencyKey] = useState("");

  useEffect(() => {
    if (open) {
      // Reset transient states on every open so previous success/errors don't leak
      setError("");
      setSuccess("");
      setSubmitting(false);
      setQuantity(1);
      setType("delivery");
      setCustomerName("");
      setIdempotencyKey(
        `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
      );
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    }
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const resp = await orders.create({
        productName,
        quantity,
        type,
        customerName,
        idempotencyKey,
      });
      const statusNote =
        resp.order.status === "pending_payment" ? " (pending payment)" : "";
      setSuccess(`Order placed${statusNote}. Invoice: ${resp.order.invoiceNo}`);
      // Auto-close shortly after success to prevent repeated submissions
      closeTimerRef.current = setTimeout(() => onOpenChange(false), 1200);
    } catch (err) {
      setError(err.message || "Failed to place order");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Place Order</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <div style={{ display: "grid" }}>
            <label style={labelStyle}>Product</label>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product name"
              style={fieldStyle}
              required
              readOnly={Boolean(defaultProduct?.name)}
            />
          </div>
          <div style={{ display: "grid" }}>
            <label style={labelStyle}>Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value) || 1)}
              style={fieldStyle}
              required
            />
          </div>
          <div style={{ display: "grid" }}>
            <label style={labelStyle}>Order Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={fieldStyle}
            >
              <option value="delivery">Delivery</option>
              <option value="pickup">Pick-up</option>
            </select>
          </div>
          <div style={{ display: "grid" }}>
            <label style={labelStyle}>Your Name</label>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Full name"
              style={fieldStyle}
            />
          </div>
          {error && (
            <div style={{ color: "#b91c1c", fontSize: 13 }}>{error}</div>
          )}
          {success && (
            <div style={{ color: "#065f46", fontSize: 13 }}>{success}</div>
          )}
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "flex-end",
              marginTop: 4,
            }}
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              style={{ padding: "10px 14px" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: "10px 16px",
                background: "#059669",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "Placing…" : "Place Order"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
