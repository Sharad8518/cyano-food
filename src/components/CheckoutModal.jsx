import React, { useState, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { orders } from "../services/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ShoppingBag, CheckCircle } from "lucide-react";

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

const CheckoutModal = ({ open, onOpenChange, onClose }) => {
  const { items, getCartTotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderType, setOrderType] = useState("delivery");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const closeTimerRef = useRef(null);
  const idempotencyKeyRef = useRef(null);

  // Generate idempotency key when modal opens
  React.useEffect(() => {
    if (open) {
      idempotencyKeyRef.current = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 15)}`;
      setError("");
      setSuccess("");
      setSubmitting(false);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    }
  }, [open]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (submitting || items.length === 0) return;

  setSubmitting(true);
  setError("");
  setSuccess("");

  try {
    // Build order payload for backend
    const orderPayload = {
      customerInfo: {
        name: customerName || "Guest",
        email,
        phone,
      },
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price, // backend needs this for subtotal
        type: orderType,
        idempotencyKey: `${idempotencyKeyRef.current}-${item.id}`,
      })),
      shippingAddress: {
        address, // extend with city/state/zip if needed
      },
      billingAddress: null, // optional, backend will default to shippingAddress
      paymentMethod: null, // optional, e.g. { gateway: "razorpay" }
      shippingMethod: null, // optional, e.g. { type: "standard", cost: 50 }
    };

    // Send to backend
    const result = await orders.create(orderPayload);

    // Show success message
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    setSuccess(
      `${totalItems} items ordered successfully! Check your email for confirmation.`
    );

    // Clear cart and close modal
    closeTimerRef.current = setTimeout(() => {
      clearCart();
      onOpenChange(false);
      onClose();
    }, 2000);
  } catch (err) {
    setError(err.message || "Failed to place orders. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  const handleClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-emerald-600" />
            Checkout
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-3">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-emerald-600">₹{getCartTotal()}</span>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                style={fieldStyle}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                style={fieldStyle}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                style={fieldStyle}
              />
            </div>

            <div className="md:col-span-2">
              <label style={labelStyle}>Delivery Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter delivery address"
                style={{ ...fieldStyle, minHeight: "80px", resize: "vertical" }}
                rows={3}
              />
            </div>

            <div className="md:col-span-2">
              <label style={labelStyle}>Order Type</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                style={fieldStyle}
              >
                <option value="delivery">Home Delivery</option>
                <option value="pickup">Store Pickup</option>
              </select>
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm bg-green-50 p-3 rounded-lg flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              {success}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || items.length === 0}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Placing Orders..."
                : `Place Orders (₹${getCartTotal()})`}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
