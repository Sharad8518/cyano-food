import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Leaf,
  Sprout,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Shield,
  Users,
  ArrowRight,
  LayoutGrid,
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ShoppingBag,
} from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Spirulina from "./Spirulina";
import VedaPage from "./VedaPage";
import CrennisPage from "./CrennisPage";
import OrdersPage from "./Orders";
import Cart from "./Cart";
import { useCart } from "../contexts/CartContext";

// Scroll to top component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToSpirulina = () => {
    navigate("/spirulina", { replace: false });
  };

  // Mock data - will be replaced with backend later
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Nutritionist",
      content:
        "Cyano's spirulina products have remarkable quality. My patients have shown significant improvements in energy levels and overall health.",
      rating: 5,
    },
    {
      name: "Ramesh Kumar",
      role: "Organic Farmer",
      content:
        "Using Dhenu Gold transformed my soil quality. My crop yield increased by 18% while reducing chemical dependency significantly.",
      rating: 5,
    },
    {
      name: "Meera Patel",
      role: "Health Enthusiast",
      content:
        "The spirulina candies are a hit with my kids! Finally, a healthy snack they actually enjoy eating daily.",
      rating: 5,
    },
  ];

  return (
    <div className="landing-page">
      {/* Navigation Header */}
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    {/* Logo Left */}
    <div className="flex-shrink-0">
      <img src="/1.png" alt="Cyano Foods" className="h-10 md:h-12" />
    </div>

    {/* Menu Center (hidden on mobile) */}
    <nav className="hidden md:flex flex-1 justify-center space-x-6">
      <button onClick={() => scrollToSection("hero")} className="nav-link">
        Home
      </button>
      <button onClick={() => scrollToSection("about")} className="nav-link">
        About
      </button>
      <button onClick={() => scrollToSection("founders")} className="nav-link">
        Founders
      </button>
      <Link to="/veda" className="nav-link">Cyano Veda</Link>
      <Link to="/crennis" className="nav-link">Cyano Crennis</Link>
      <button onClick={navigateToSpirulina} className="nav-link">
        What is Spirulina
      </button>
    </nav>

    {/* Cart + Mobile Menu Toggle */}
    <div className="flex items-center space-x-4">
      {/* Cart */}
      <button onClick={() => setCartOpen(true)} className="relative">
        <ShoppingBag className="h-6 w-6" style={{color:"#0b6b0b"}}/>
        {getCartItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
            {getCartItemCount() > 9 ? "9+" : getCartItemCount()}
          </span>
        )}
      </button>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
      <button onClick={() => scrollToSection("hero")} className="block w-full text-left" style={{color:"#0F6D0F"}}>Home</button>
      <button onClick={() => scrollToSection("about")} className="block w-full text-left" style={{color:"#0F6D0F"}}>About</button>
      <button onClick={() => scrollToSection("founders")} className="block w-full text-left" style={{color:"#0F6D0F"}}>Founders</button>
      <Link to="/veda" className="block w-full text-left" style={{color:"#0F6D0F"}}>Cyano Veda</Link>
      <Link to="/crennis" className="block w-full text-left" style={{color:"#0F6D0F"}}>Cyano Crennis</Link>
      <button onClick={navigateToSpirulina} className="block w-full text-left" style={{color:"#0F6D0F"}}>What is Spirulina</button>
    </div>
  )}
</header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-decor" aria-hidden="true">
          <img src="/lea.png" alt="" className="leaf-left" />
          <img src="/lea.png" alt="" className="leaf-right" />
        </div>
        <div className="hero-container">
          {/* Top Content */}
          <div className="hero-top-content">
            <h1 className="hero-title">
              <span className="weight-normal">Empowering Health</span>
              <br />
              <span className="weight-thin">and Agriculture </span>
              <span className="naturally-highlight">Naturally</span>
            </h1>

            <p className="hero-subtitle">
              Discover the extraordinary power of Spirulina through our
              innovative healthcare and agricultural solutions. From nutritious
              supplements to soil-regenerating bio-fertilizers, we're building a
              healthier world.
            </p>
          </div>

          {/* Primary Cards Below */}
          <div className="hero-cards">
            <div className="hero-card">
              <div className="hero-card-icon" aria-hidden>
                <img
                  src="/2.png"
                  alt="Cyano Veda Logo"
                  className="hero-card-logo"
                />
              </div>

              <div className="hero-card-content">
                <h3 className="hero-card-title">
                  Cyano Veda Health & Wellness
                </h3>
                <p className="hero-card-subtitle">
                  <span className="tagline-highlight">Healing Naturally</span>{" "}
                  with Spirulina
                </p>
              </div>

              <Link
                to="/veda"
                className="hero-card-link"
                aria-label="Explore Health Products"
              >
                <span>Explore Health Products</span>
                <ArrowRight className="hero-card-link-icon" size={16} />
              </Link>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon" aria-hidden>
                <img
                  src="/3.png"
                  alt="Cyano Crennis Logo"
                  className="hero-card-logo"
                />
              </div>

              <div className="hero-card-content">
                <h3 className="hero-card-title">
                  Cyano Crennis Agricultural Solutions
                </h3>
                <p className="hero-card-subtitle">
                  <span className="tagline-highlight">Plant Health</span>{" "}
                  Enhancers
                </p>
              </div>

              <Link
                to="/crennis"
                className="hero-card-link"
                aria-label="Discover Agriculture Solutions"
              >
                <span>Explore Health Products</span>
                <ArrowRight className="hero-card-link-icon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-wrapper">
            {/* Left - Image */}
            <div className="about-left-image">
              <div className="image-container">
                <img
                  src="/lep.png"
                  alt="Spirulina leaf"
                  className="about-main-image"
                />
                <div className="image-accent"></div>
              </div>
            </div>

            {/* Center - Main Content */}
            <div className="about-center-content">
              <div className="section-header">
                <span className="section-label">Our Story</span>
                <h2 className="section-title">About Cyano Foods</h2>
                <p className="section-subtitle">
                  A purpose-driven company committed to health, sustainability,
                  and innovation
                </p>
              </div>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <div className="feature-icon-wrapper">
                    <Award size={22} className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3>Tailored Capabilities</h3>
                    <p>
                      Custom-built spirulina solutions for your health and
                      agricultural needs, maximizing natural impact.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="feature-icon-wrapper">
                    <Shield size={22} className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3>Robust Security</h3>
                    <p>
                      Cyano Foods maintains the highest quality standards with
                      rigorous testing and certifications. Our products exceed
                      established safety protocols with FSSAI, GMP, and organic
                      certifications.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="feature-icon-wrapper">
                    <LayoutGrid size={22} className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3>Seamless Integration</h3>
                    <p>
                      Health supplements and agricultural solutions that connect
                      with your existing wellness routines and farming
                      practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Minimal Decoration */}
            <div className="about-right-decoration">
              <div className="decoration-grid">
                <div className="deco-item deco-1"></div>
                <div className="deco-item deco-2"></div>
                <div className="deco-item deco-3"></div>
                <div className="deco-item deco-4"></div>
                <div className="deco-item deco-5"></div>
                <div className="deco-item deco-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="what-we-do-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Do at Cyano Foods</h2>
            <p className="section-subtitle open-runde">
              Pioneering spirulina-based innovation across health and
              agriculture
            </p>
          </div>

          <div className="what-we-do-content">
            <div className="business-divisions">
              <div
                className="division-card veda-card clickable-card"
                onClick={() => navigate("/veda")}
              >
                <div className="division-header">
                  <img
                    src="https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
                    alt="Cyano Veda"
                    className="division-logo"
                  />
                  <div className="division-title-group">
                    <h3 className="division-title">
                      Cyano Veda - Health & Wellness
                    </h3>
                    <p className="division-tagline">
                      Healing Naturally with Spirulina
                    </p>
                  </div>
                </div>
                <div className="division-content">
                  <p className="division-intro">
                    Our health division focuses on creating premium
                    spirulina-based products for optimal wellness:
                  </p>
                  <ul className="division-list">
                    <li>
                      <span className="product-name">
                        Spirulina Jelly Candies
                      </span>
                      <span className="product-desc">
                        Delicious nutrition for kids and adults
                      </span>
                    </li>
                    <li>
                      <span className="product-name">
                        Pure Organic Spirulina Powder
                      </span>
                      <span className="product-desc">
                        Complete superfood supplement
                      </span>
                    </li>
                    <li>
                      <span className="product-name">
                        Personal Care Products
                      </span>
                      <span className="product-desc">
                        Natural soaps, shampoos, and hair oils
                      </span>
                    </li>
                    <li>
                      <span className="product-name">Functional Foods</span>
                      <span className="product-desc">
                        Convenient spirulina-enriched products
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="division-card crennis-card clickable-card"
                onClick={() => navigate("/crennis")}
              >
                <div className="division-header">
                  <img
                    src="https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
                    alt="Cyano Crennis"
                    className="division-logo"
                  />
                  <div className="division-title-group">
                    <h3 className="division-title">
                      Cyano Crennis - Agricultural Solutions
                    </h3>
                    <p className="division-tagline">Plant Health Enhancers</p>
                  </div>
                </div>
                <div className="division-content">
                  <p className="division-intro">
                    Our agriculture division revolutionizes farming with
                    cow-based natural solutions:
                  </p>
                  <ul className="division-list">
                    <li>
                      <span className="product-name">Dhenu Gold</span>
                      <span className="product-desc">
                        Soil enhancer with spirulina and cow urine powder
                      </span>
                    </li>
                    <li>
                      <span className="product-name">Dhan Rakshak</span>
                      <span className="product-desc">
                        Natural herbal pesticide for crop protection
                      </span>
                    </li>
                    <li>
                      <span className="product-name">Dhan Vruddhi</span>
                      <span className="product-desc">
                        Organic nutrition booster for plants
                      </span>
                    </li>
                    <li>
                      <span className="product-name">PROM with Spirulina</span>
                      <span className="product-desc">
                        Phosphate-rich organic manure
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="impact-section">
              <h3 className="impact-title">Our Impact</h3>
              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-number">25-30%</div>
                  <div className="impact-label">Chemical Reduction</div>
                  <p className="impact-desc">
                    Average reduction in chemical fertilizer use
                  </p>
                </div>
                <div className="impact-card">
                  <div className="impact-number">10-20%</div>
                  <div className="impact-label">Yield Increase</div>
                  <p className="impact-desc">
                    Average improvement in crop production
                  </p>
                </div>
                <div className="impact-card">
                  <div className="impact-number">10,000+</div>
                  <div className="impact-label">Happy Customers</div>
                  <p className="impact-desc">
                    Families and farmers trust our products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="founders-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Founders</h2>
            <p className="section-subtitle">
              Visionary leaders driving the spirulina revolution in India
            </p>
          </div>

          <div className="founders-content">
            <div className="founder-card">
              <div className="founder-info">
                <div className="founder-header">
                  <div className="founder-avatar"></div>
                  <div className="founder-details">
                    <h3>Swathi Jandhyala</h3>
                    <p className="founder-role">Founder & CEO</p>
                  </div>
                </div>
                <div className="founder-description">
                  <p>
                    <strong>Swathi Jandhyala</strong> is a passionate innovator,
                    entrepreneur, and advocate for natural health and
                    sustainable agriculture. With deep-rooted belief in nature's
                    healing power and a background in Spirulina research, she
                    founded Cyano Foods with one mission:{" "}
                    <strong>
                      to create a healthier next generation through pure,
                      natural solutions.
                    </strong>
                  </p>

                  <div className="founder-vision">
                    <h4>🌱 Her Vision:</h4>
                    <ul>
                      <li>
                        Make chemical-free, plant-based nutrition accessible to
                        every family
                      </li>
                      <li>
                        Empower farmers with natural, soil-enriching
                        alternatives
                      </li>
                      <li>
                        Transform Spirulina into a household name for health and
                        wellness
                      </li>
                    </ul>
                  </div>

                  <blockquote className="founder-quote">
                    "Real change starts from the root — whether it's our food,
                    our soil, or our values."
                    <cite>– Swathi Jandhyala</cite>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="founder-card">
              <div className="founder-info">
                <div className="founder-header">
                  <div className="founder-avatar"></div>
                  <div className="founder-details">
                    <h3>Sastry Jandhyala</h3>
                    <p className="founder-role">Co-Founder</p>
                  </div>
                </div>
                <div className="founder-description">
                  <p>
                    <strong>Sastry Jandhyala</strong> is a visionary
                    entrepreneur passionate about natural health and sustainable
                    agriculture. Co-founding Cyano Foods, he champions Spirulina
                    as a superfood for public health and a regenerative farming
                    catalyst.
                  </p>
                  <br />

                  <div className="founder-achievements">
                    <h4>🌱 His Leadership Has Shaped:</h4>
                    <ul>
                      <li>
                        Spirulina jelly and organic personal care product lines
                      </li>
                      <li>
                        Crennis – Nature Veda, our bio-solution brand for
                        farming
                      </li>
                      <li>
                        A growing network of Spirulina farmers and wellness
                        advocates across India
                      </li>
                    </ul>
                  </div>

                  <blockquote className="founder-quote">
                    "Our work is not just business — it is a responsibility to
                    the next generation."
                    <cite>– Sastry Jandhyala</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultivation Details Section */}
      <section id="cultivation" className="cultivation-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Cultivation Excellence</h2>
            <p className="section-subtitle">
              How we produce the world's purest and most potent spirulina
            </p>
          </div>

          <div className="cultivation-content">
            <div className="cultivation-process">
              <div className="process-step">
                <div className="step-icon">🏭</div>
                <h3>Controlled Environment</h3>
                <p>
                  Our spirulina is cultivated in{" "}
                  <strong>mineral-rich, controlled alkaline waters</strong> at
                  optimal pH levels (9.5-11). Unlike competitors using open
                  ponds, our <strong>closed-system cultivation</strong> prevents
                  contamination and maintains consistent quality year-round.
                </p>
              </div>

              <div className="process-step">
                <div className="step-icon">🌡️</div>
                <h3>Low-Temperature Processing</h3>
                <p>
                  We employ advanced{" "}
                  <strong>
                    spray-drying technology at temperatures below 60°C
                  </strong>
                  , preserving heat-sensitive nutrients like phycocyanin,
                  vitamins, and enzymes. This process retains
                  <strong>95% more active compounds</strong> compared to
                  conventional high-heat methods.
                </p>
              </div>

              <div className="process-step">
                <div className="step-icon">🔬</div>
                <h3>Quality Testing</h3>
                <p>
                  Every batch undergoes{" "}
                  <strong>rigorous third-party testing</strong> for heavy
                  metals, microcystin, and microbial contaminants. Our spirulina
                  consistently shows{" "}
                  <strong>undetectable levels of toxins</strong>
                  with certifications including USDA Organic, FSSAI, and GMP
                  compliance.
                </p>
              </div>

              <div className="process-step">
                <div className="step-icon">🌿</div>
                <h3>Sustainable Practices</h3>
                <p>
                  Sustainably produced without synthetic fertilizers or
                  preservatives, our cultivation process preserves the full
                  nutritional profile while remaining{" "}
                  <strong>gentle on the environment</strong>. We use 95% less
                  water than traditional crops while producing maximum
                  nutrition.
                </p>
              </div>
            </div>

            <div className="cultivation-location">
              <h3>From Pure Sources</h3>
              <p>
                Our spirulina cultivation facilities are strategically located
                to ensure optimal growing conditions. We also source premium
                herbal extracts from the{" "}
                <strong>lush forests of Dang, Gujarat</strong> for our personal
                care products, maintaining our commitment to natural,
                high-quality ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spirulina CTA Section */}
      <section className="spirulina-cta-section">
        <div className="container">
          <div className="spirulina-cta-content">
            <div className="cta-main">
              <h2>Want to Learn More About Spirulina?</h2>
              <p>
                Discover the fascinating history, complete nutritional profile,
                and incredible health benefits of nature's most powerful
                superfood.
              </p>
            </div>

            <div className="cta-action">
              <Button
                className="spirulina-cta-button"
                onClick={navigateToSpirulina}
              >
                What is Spirulina
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Trusted by parents, farmers, entrepreneurs, and wellness seekers
              across India
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star filled" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions about our products and services
            </p>
          </div>

          <div className="faq-content">
            <Accordion type="single" collapsible className="faq-accordion">
              <AccordionItem value="item-1" className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">
                    What makes Cyano Foods different from other companies?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-content-inner">
                  <div className="faq-answer">
                    <p>
                      Cyano Foods stands out through our commitment to
                      sustainable cultivation, organic certification, and
                      innovative product development. We focus on creating
                      high-quality spirulina products that benefit both health
                      and agriculture.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">
                    Are your products certified organic?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-content-inner">
                  <div className="faq-answer">
                    <p>
                      Yes, all our products are certified organic and meet the
                      highest quality standards. We maintain FSSAI, GMP, and
                      organic certifications to ensure the best for our
                      customers.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">
                    How do you ensure product quality?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-content-inner">
                  <div className="faq-answer">
                    <p>
                      We implement rigorous quality control measures throughout
                      our production process, from cultivation to packaging. Our
                      facilities follow strict protocols and regular testing to
                      maintain consistent quality.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">
                    What are the benefits of spirulina?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-content-inner">
                  <div className="faq-answer">
                    <p>Spirulina is a nutrient-rich superfood that provides:</p>
                    <ul className="faq-features">
                      <li>
                        <strong>High protein content</strong> - Complete protein
                        with all essential amino acids
                      </li>
                      <li>
                        <strong>Rich in vitamins</strong> - B vitamins, vitamin
                        K, and beta-carotene
                      </li>
                      <li>
                        <strong>Mineral source</strong> - Iron, calcium,
                        magnesium, and potassium
                      </li>
                      <li>
                        <strong>Antioxidant properties</strong> - Helps protect
                        against oxidative stress
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">
                    How can I incorporate spirulina into my diet?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-content-inner">
                  <div className="faq-answer">
                    <p>Spirulina can be easily added to your daily routine:</p>
                    <ul className="faq-features">
                      <li>
                        <strong>Powder form</strong> - Mix with smoothies,
                        juices, or water
                      </li>
                      <li>
                        <strong>Tablets</strong> - Take with meals for
                        convenience
                      </li>
                      <li>
                        <strong>Functional foods</strong> - Enjoy our
                        spirulina-enriched products
                      </li>
                      <li>
                        <strong>Recommended dosage</strong> - Start with 1-3
                        grams daily
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-question">
                    Do you ship internationally?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faq-content-inner">
                  <div className="faq-answer">
                    <p>
                      Currently, we focus on serving the Indian market with
                      plans to expand internationally. We ensure fast and
                      reliable delivery across India with proper packaging to
                      maintain product freshness.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to start your journey with sustainable solutions? We're here
              to help.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>Visit Us</h4>
                  <p>LOWER TIPRA BADDI - 174103, DIST-SOLAN-HIMACHAL PRADESH,INDIA</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <p>+91 89249456787</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <p>mail@cyanoindia.com</p>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <div className="cta-header">
                <h3>Ready to Get Started?</h3>
                <p>
                  Join thousands of satisfied customers who have already
                  discovered the power of sustainable solutions.
                </p>
              </div>

              <div className="cta-features">
                <div className="cta-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Premium Quality Products</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Expert Support Team</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Fast & Secure Delivery</span>
                </div>
              </div>

              <div className="cta-buttons">
                <button className="cta-primary">Start Your Order</button>
                <button className="cta-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <h4>Cyano Foods</h4>
                <p>
                  Empowering health and agriculture naturally through the power
                  of Spirulina.
                </p>
              </div>
              <div className="footer-mission">
                <em>
                  "A healthier generation and a greener earth are not
                  dreams—they are decisions we make every day."
                </em>
              </div>
            </div>

            <div className="footer-section">
              <h4>Our Divisions</h4>
              <ul>
                <li>
                  <span className="division-icon"></span>
                  <span>Cyano Veda - Health & Wellness</span>
                </li>
                <li>
                  <span className="division-icon"></span>
                  <span>Cyano Crennis - Agricultural Solutions</span>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("about")}>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("founders")}>
                    Founders
                  </button>
                </li>
                <li>
                  <button onClick={navigateToSpirulina}>
                    What is Spirulina
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Stay updated with our latest products and health tips.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Cyano Foods OPC Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Component */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

const LandingPage = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spirulina" element={<Spirulina />} />
        <Route path="/veda" element={<VedaPage />} />
        <Route path="/crennis" element={<CrennisPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
};

export default LandingPage;
