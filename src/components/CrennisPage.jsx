import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Leaf,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  ShoppingBag,
  Menu,
  X 
} from "lucide-react";
import { useCart } from "../contexts/CartContext";
import Cart from "./Cart";

const CrennisPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart, getCartItemCount } = useCart();

  const [isLoaded, setIsLoaded] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(raf);
  }, []);

    const navItems = [
    { label: "Cyano Veda", to: "/veda" },
    { label: "Home", to: "/" },
  ];

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-700 ease-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `radial-gradient(800px 400px at 0% 0%, rgba(16,185,129,0.06), transparent 60%),
          radial-gradient(900px 500px at 100% 100%, rgba(16,185,129,0.05), transparent 60%),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><circle cx="1.2" cy="1.2" r="1.2" fill="#0b1220" fill-opacity="0.03"/></svg>')`,
        backgroundRepeat: "no-repeat, no-repeat, repeat",
        backgroundSize: "100% 100%, 100% 100%, 14px 14px",
        backgroundPosition: "left top, right bottom, 0 0",
      }}
    >
      {/* Header */}
       <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/60 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="group btn-green-ghost btn-compact"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back</span>
            </button>
            <div className="h-6 w-px bg-gray-200/70"></div>
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight text-gray-800/90 hover:text-emerald-700 transition-colors"
            >
              Cyano Foods
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="btn-green-ghost btn-compact"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setCartOpen(true)}
              className="relative btn-green-ghost btn-compact"
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getCartItemCount() > 9 ? "9+" : getCartItemCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden btn-green-ghost btn-compact"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md px-4 py-4 space-y-4 transform transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block w-full text-left btn-green-ghost"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <button
          onClick={() => {
            setCartOpen(true);
            setMenuOpen(false);
          }}
          className="relative block w-full text-left btn-green-ghost"
        >
          <ShoppingBag className="h-5 w-5 inline mr-2" />
          Cart
          {getCartItemCount() > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 inline-flex items-center justify-center font-medium">
              {getCartItemCount() > 9 ? "9+" : getCartItemCount()}
            </span>
          )}
        </button>
      </div>
    </header>

      {/* Hero Section */}
      <section
        className="relative bg-white px-6 md:px-10 py-24 md:py-28 mt-20"
        style={{ overflow: "hidden" }}
      >
        {/* Import display serif font for hero heading */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
        />

        {/* Subtle aesthetic background overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(1000px 500px at 12% 20%, rgba(16,185,129,0.12), transparent 60%)," +
              "radial-gradient(900px 450px at 88% 70%, rgba(34,197,94,0.10), transparent 55%)," +
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><circle cx="1.2" cy="1.2" r="1.2" fill="%230b1220" fill-opacity="0.05"/></svg>\')',
            backgroundRepeat: "no-repeat, no-repeat, repeat",
            backgroundSize: "100% 100%, 100% 100%, 14px 14px",
            backgroundPosition: "center, center, 0 0",
          }}
        />

        {/* Content */}
        <div
          className={`max-w-6xl mx-auto relative z-10 transform transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            {/* Background Image Section */}
            <div className="w-full flex justify-center mb-8">
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundImage: "url(/3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: "0.8",
                  filter: "brightness(1.1) contrast(0.9)",
                }}
              />
            </div>

            {/* CTA Button - Positioned below image */}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Subtle aesthetic background overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(1100px 550px at 8% 0%, rgba(16,185,129,0.08), transparent 60%)," +
              "radial-gradient(900px 450px at 92% 100%, rgba(34,197,94,0.06), transparent 55%)," +
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><circle cx="1.2" cy="1.2" r="1.2" fill="%230b1220" fill-opacity="0.04"/></svg>\')',
            backgroundRepeat: "no-repeat, no-repeat, repeat",
            backgroundSize: "100% 100%, 100% 100%, 14px 14px",
            backgroundPosition: "left top, right bottom, 0 0",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-left mb-20">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                background:
                  "linear-gradient(135deg, #000000 0%, #2a2a2a 25%, #808080 50%, #2a2a2a 75%, #000000 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(128, 128, 128, 0.15)",
              }}
            >
              Plant Health Enhancers
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed max-w-4xl font-normal italic"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Natural inputs that regenerate soil and strengthen plants: from
              organic enhancers to bio-pesticides and nutrition boosters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-7 shadow-sm border border-emerald-100/40 bg-white/70 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-inner ring-1 ring-emerald-100/60">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="text-[10px] text-emerald-700 font-medium bg-emerald-50/80 px-2.5 py-1 rounded-full tracking-wide border border-emerald-100 uppercase">
                  Natural
                </div>
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.025em",
                  fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                25-30% Less Chemicals
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  fontWeight: "400",
                  fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Significantly reduced chemical dependency for sustainable
                farming
              </p>
            </div>

            <div className="rounded-2xl p-7 shadow-sm border border-emerald-100/40 bg-white/70 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-inner ring-1 ring-emerald-100/60">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-[10px] text-emerald-700 font-medium bg-emerald-50/80 px-2.5 py-1 rounded-full tracking-wide border border-emerald-100 uppercase">
                  Proven
                </div>
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.025em",
                  fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                10-20% Yield Increase
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  fontWeight: "400",
                  fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Consistent improvement in crop productivity and quality
              </p>
            </div>

            <div className="rounded-2xl p-7 shadow-sm border border-emerald-100/40 bg-white/70 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-inner ring-1 ring-emerald-100/60">
                  <span className="text-2xl">🌿</span>
                </div>
                <div className="text-[10px] text-emerald-700 font-medium bg-emerald-50/80 px-2.5 py-1 rounded-full tracking-wide border border-emerald-100 uppercase">
                  Organic
                </div>
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.025em",
                  fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                100% Natural Inputs
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  fontWeight: "400",
                  fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Pure natural ingredients with no synthetic additives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-8 px-4 bg-white overflow-hidden">
        {/* Diagonal tiny-dots background */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(1000px 500px at 12% 20%, rgba(16,185,129,0.12), transparent 60%)," +
              "radial-gradient(900px 450px at 88% 70%, rgba(34,197,94,0.10), transparent 55%)," +
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><circle cx="1.2" cy="1.2" r="1.2" fill="%230b1220" fill-opacity="0.05"/></svg>\')',
            backgroundRepeat: "no-repeat, no-repeat, repeat",
            backgroundSize: "100% 100%, 100% 100%, 14px 14px",
            backgroundPosition: "center, center, 0 0",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Heading - aligned left, consistent style */}
          <div className="mb-8 text-left">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent tracking-tight bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                background:
                  "linear-gradient(135deg, #000000 0%, #2a2a2a 25%, #808080 50%, #2a2a2a 75%, #000000 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(128, 128, 128, 0.15)",
                marginBottom: "0.4rem",
              }}
            >
              Our Agricultural Solutions
            </h2>
            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed inline-block max-w-2xl"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: "italic",
              }}
            >
              Comprehensive range of natural spirulina-based solutions designed
              to enhance soil health, protect crops, and boost agricultural
              productivity sustainably.
            </p>
          </div>

          {/* Product 1 - SERIOUS MASS */}
          <div className="relative max-w-3xl mx-auto mb-4">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
              {/* Image with decorative leaf behind */}
              <div className="relative w-44 md:w-52 flex-shrink-0">
                <img
                  src="/oi.png"
                  alt=""
                  className="absolute -top-1 -left-1 w-24 md:w-28 opacity-90 rotate-3 pointer-events-none z-0"
                />
                <img
                  src="/v4.png"
                  alt="Serious Mass"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  SERIOUS MASS
                </h3>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  High-strength, 5000U
                </div>
                <div className="relative inline-block mx-auto md:mx-0 mb-1">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 hidden sm:block" />
                  <div className="text-gray-700 max-w-[52ch] pl-4 sm:pl-5">
                    <div className="space-y-2.5 text-sm">
                      <p>
                        High‑strength spirulina blend for serious mass building.
                      </p>
                      <p>
                        Packed with essential proteins and key micronutrients.
                      </p>
                      <p>
                        Supports energy production and post‑workout recovery.
                      </p>
                      <p>
                        Designed to help you gain size without compromising
                        quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                  <button
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm px-4 py-2 md:px-6 md:py-2.5 w-auto rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    onClick={() =>
                      addToCart({
                        name: "Serious Mass",
                        price: 2999,
                        image: "/v4.png",
                      })
                    }
                  >
                    Add to Cart
                  </button>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    ₹2,999
                    <span className="text-base text-orange-500 line-through ml-2">
                      ₹3,499
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 - PROTEIN WHEY */}
          <div className="relative max-w-3xl mx-auto mb-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-5">
              {/* Image with decorative leaf behind */}
              <div className="relative w-44 md:w-52 flex-shrink-0">
                <img
                  src="/oi.png"
                  alt=""
                  className="absolute -top-1 -right-1 w-24 md:w-28 opacity-90 -rotate-3 pointer-events-none z-0"
                />
                <img
                  src="/v5.png"
                  alt="Protein Whey"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  PROTEIN WHEY
                </h3>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  High-strength, 4000U
                </div>
                <div className="relative inline-block mx-auto md:mx-0 mb-1">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 hidden sm:block" />
                  <div className="text-gray-700 max-w-[52ch] pl-4 sm:pl-5">
                    <div className="space-y-2.5 text-sm">
                      <p>
                        Pure whey protein isolate enhanced with organic
                        spirulina.
                      </p>
                      <p>High bioavailability for rapid absorption.</p>
                      <p>Ideal for lean muscle development and maintenance.</p>
                      <p>Easy to mix and gentle on digestion.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2">
                  <button
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm px-4 py-2 md:px-6 md:py-2.5 w-auto rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    onClick={() =>
                      addToCart({
                        name: "Protein Whey",
                        price: 1899,
                        image: "/v5.png",
                      })
                    }
                  >
                    Add to Cart
                  </button>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    ₹1,899
                    <span className="text-base text-orange-500 line-through ml-2">
                      ₹2,299
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 - MAX MASS 3XL */}
          <div className="relative max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
              {/* Image with decorative leaf behind */}
              <div className="relative w-44 md:w-52 flex-shrink-0">
                <img
                  src="/oi.png"
                  alt=""
                  className="absolute -top-1 -left-1 w-24 md:w-28 opacity-90 rotate-3 pointer-events-none z-0"
                />
                <img
                  src="/v6.png"
                  alt="Max Mass 3XL"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  MAX MASS 3XL
                </h3>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  High-strength, 4000U
                </div>
                <div className="relative inline-block mx-auto md:mx-0 mb-1">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 hidden sm:block" />
                  <div className="text-gray-700 max-w-[52ch] pl-4 sm:pl-5">
                    <div className="space-y-2.5 text-sm">
                      <p>
                        Ultra‑high calorie mass gainer with spirulina protein
                        matrix.
                      </p>
                      <p>
                        Triple‑action formula to increase calories, protein and
                        nutrients.
                      </p>
                      <p>
                        Supports muscle growth during intense training phases.
                      </p>
                      <p>
                        Great for hard‑gainers needing convenient calorie
                        support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                  <button
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm px-4 py-2 md:px-6 md:py-2.5 w-auto rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    onClick={() =>
                      addToCart({
                        name: "Max Mass 3XL",
                        price: 3499,
                        image: "/v6.png",
                      })
                    }
                  >
                    Add to Cart
                  </button>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    ₹3,499
                    <span className="text-base text-orange-500 line-through ml-2">
                      ₹3,999
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="py-12 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #fefcf7 20%, #faf7f2 40%, #f5f1ea 60%, #f0ebe3 80%, #ebe6dd 100%)",
        }}
      >
        {/* Faded border lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text">
                Why Choose Cyano Crennis?
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Leading the agricultural revolution with scientifically-proven
                spirulina solutions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg mt-1">🌿</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      100% Natural
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg mt-1">🌿</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Pure spirulina extract without harmful chemicals
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg mt-1">🌿</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Scientifically tested for proven results
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg mt-1">🌿</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Increases crop yields significantly
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg mt-1">🌿</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Improves soil health naturally
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg mt-1">🌿</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Environmentally sustainable solutions
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Learn More
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80">
                <img
                  src="/lea.png"
                  alt="Why Choose Cyano Crennis"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-gray-50">
        {/* Subtle dots + radial glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(1000px 500px at 0% 10%, rgba(16,185,129,0.08), transparent 60%)," +
              "radial-gradient(1000px 500px at 100% 90%, rgba(34,197,94,0.06), transparent 60%)," +
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><circle cx="1.2" cy="1.2" r="1.2" fill="%230b1220" fill-opacity="0.04"/></svg>\')',
            backgroundRepeat: "no-repeat, no-repeat, repeat",
            backgroundSize: "100% 100%, 100% 100%, 14px 14px",
            backgroundPosition: "left top, right bottom, 0 0",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                background:
                  "linear-gradient(135deg, #000000 0%, #2a2a2a 25%, #808080 50%, #2a2a2a 75%, #000000 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(128, 128, 128, 0.15)",
              }}
            >
              Simple & Transparent Pricing
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto font-normal italic"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              for all agricultural solutions
            </p>
          </div>

          {/* Pricing Cards - mobile stack, desktop row */}
          <div className="grid grid-cols-1 gap-4 md:flex md:justify-center md:items-end md:gap-6">
            {/* Basic Plan - SERIOUS MASS - Smaller & Tilted */}
            <div className="bg-white/90 rounded-lg p-3 md:p-4 text-center shadow-sm md:shadow-md border border-gray-200 hover:shadow-md md:hover:shadow-lg transition-all duration-300 md:transform md:-rotate-2 md:hover:rotate-0 w-full max-w-sm mx-auto md:w-64 md:mx-0">
              <div className="mb-3">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Basic plan
                </h3>
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                  SERIOUS MASS
                </h4>
              </div>

              {/* Product Image */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                  <img
                    src="/v4.png"
                    alt="Serious Mass"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl font-bold text-gray-900">
                    ₹2,999
                  </span>
                  <span className="text-xs text-gray-500">per bottle</span>
                </div>
              </div>

              <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get started
              </button>
            </div>

            {/* Business Plan - PROTEIN WHEY - Middle & Bigger */}
            <div className="bg-gray-900/90 rounded-lg p-4 md:p-6 text-center shadow-md md:shadow-xl border border-gray-800 hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 relative w-full max-w-sm mx-auto md:w-72 md:mx-0 order-first md:order-none">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most popular
                </span>
              </div>

              <div className="mb-3 md:mb-4 mt-2">
                <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                  Business plan
                </h3>
                <h4 className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                  PROTEIN WHEY
                </h4>
              </div>

              {/* Product Image */}
              <div className="flex justify-center mb-4 md:mb-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40">
                  <img
                    src="/v5.png"
                    alt="Protein Whey"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-4 md:mb-5">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl md:text-2xl font-bold text-white">
                    ₹1,899
                  </span>
                  <span className="text-xs text-gray-400">per bottle</span>
                </div>
              </div>

              <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get started
              </button>
            </div>

            {/* Enterprise Plan - MAX MASS 3XL - Smaller & Tilted */}
            <div className="bg-white/90 rounded-lg p-3 md:p-4 text-center shadow-sm md:shadow-md border border-gray-200 hover:shadow-md md:hover:shadow-lg transition-all duration-300 md:transform md:rotate-2 md:hover:rotate-0 w-full max-w-sm mx-auto md:w-64 md:mx-0">
              <div className="mb-3">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Enterprise plan
                </h3>
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                  MAX MASS 3XL
                </h4>
              </div>

              {/* Product Image */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                  <img
                    src="/v6.png"
                    alt="Max Mass 3XL"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl font-bold text-gray-900">
                    ₹3,499
                  </span>
                  <span className="text-xs text-gray-500">per bottle</span>
                </div>
              </div>

              <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-transparent mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              background:
                "linear-gradient(135deg, #000000 0%, #2a2a2a 25%, #808080 50%, #2a2a2a 75%, #000000 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(128, 128, 128, 0.15)",
            }}
          >
            Ready to Transform Your Farm?
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-normal italic"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Join thousands of farmers who have discovered the power of natural
            agriculture
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              onClick={() =>
                addToCart({
                  name: "Crennis Product",
                  price: 2500,
                  image: "/3.png",
                })
              }
            >
              Add to Cart
            </button>
            <Link
              to="/veda"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Explore Health Products →
            </Link>
          </div>
        </div>
      </section>
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default CrennisPage;
