import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Star,
  Award,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const SpiruliaPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
  };

  // Preserve scroll position across refreshes for this page
  useEffect(() => {
    const storageKey = "spirulina:scrollY";

    // Try to restore scroll position once immediately, and again after load
    const restoreScroll = () => {
      const saved = sessionStorage.getItem(storageKey);
      if (saved !== null) {
        const y = parseInt(saved, 10);
        if (!Number.isNaN(y)) {
          window.scrollTo({ top: y, behavior: "auto" });
        }
      }
    };

    // Initial render: run now and shortly after layout settles
    restoreScroll();
    const raf = requestAnimationFrame(() => setTimeout(restoreScroll, 0));
    window.addEventListener("load", restoreScroll, { once: true });

    // Mark loaded state for any CSS that depends on it (no scroll changes)
    const timer = setTimeout(() => setIsLoaded(true), 0);

    // Save scroll position right before unload/navigation
    const saveScroll = () => {
      sessionStorage.setItem(
        storageKey,
        String(window.scrollY || window.pageYOffset || 0)
      );
    };
    window.addEventListener("beforeunload", saveScroll);
    window.addEventListener("pagehide", saveScroll);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") saveScroll();
    });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      window.removeEventListener("load", restoreScroll);
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("pagehide", saveScroll);
    };
  }, []);

  return (
    <div className={`spirulina-page ${isLoaded ? "page-loaded" : ""}`}>
      {/* Navigation Bar */}
      <nav className="spirulina-navbar">
        <div className="navbar-container">
          <Button
            onClick={goBack}
            className="navbar-back-button"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              color: "#1f2937",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              fontWeight: "600",
              padding: "8px 16px",
              transition: "all 0.3s ease",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 1)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
              e.target.style.color = "#111827";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.9)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.target.style.color = "#1f2937";
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="spirulina-content">
        {/* Hero Section */}
        <section
          className="spirulina-hero-enhanced"
          style={{
            backgroundImage: "url(/gree.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
          }}
        >
          <div className="container">
            <div className="hero-content-enhanced">
              <h1
                className="hero-title"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: "700",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  lineHeight: "1.1",
                  color: "#ffffff",
                  textAlign: "center",
                  letterSpacing: "-0.02em",
                  textShadow:
                    "0 4px 25px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(0, 0, 0, 0.3)",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    color: "#000000 !important",
                    fontWeight: "900",
                    textShadow: "none",
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.5)",
                    fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                  }}
                >
                  What is{" "}
                </span>
                <span
                  className="hero-white"
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    textShadow:
                      "0 4px 25px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(0, 0, 0, 0.3)",
                    position: "relative",
                    display: "inline-block",
                    transform: "translateZ(0)",
                  }}
                >
                  Spirulina
                </span>
                <span
                  className="hero-soft"
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: "600",
                    textShadow:
                      "0 4px 25px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  ?
                </span>
              </h1>
              <p
                className="page-subtitle-enhanced"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: "600",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  lineHeight: "1.5",
                  color: "#ffffff",
                  textAlign: "center",
                  maxWidth: "600px",
                  margin: "0 auto 2rem auto",
                  letterSpacing: "0.01em",
                  textShadow:
                    "0 3px 20px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)",
                  fontStyle: "normal",
                }}
              >
                Discover the ancient blue-green superfood that's transforming
                modern health
              </p>
              <br />
              <div className="hero-stats">
                <div className="stat-item-hero">
                  <span className="stat-number">3.5B</span>
                  <span className="stat-label">Years Old</span>
                </div>
                <div className="stat-item-hero">
                  <span className="stat-number">70%</span>
                  <span className="stat-label">Protein</span>
                </div>
                <div className="stat-item-hero">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Nutrients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Spirulina Section */}
        <section className="spirulina-definition-section">
          <div className="container">
            <div className="definition-content">
              <div className="main-definition">
                <h2 className="section-title-enhanced">
                  The Complete Superfood
                </h2>
                <div className="definition-text-enhanced">
                  <p className="lead-text">
                    <strong>Spirulina</strong> is a blue-green microalgae that
                    has existed on Earth for
                    <strong> 3.5 billion years</strong>. This microscopic
                    powerhouse is one of the oldest life forms on our planet and
                    contains more nutrition per gram than any other food source
                    known to science.
                  </p>

                  <div className="key-highlights">
                    <div className="highlight-item">
                      <CheckCircle className="highlight-icon" />
                      <span>
                        <strong>65-70% Protein</strong> - Complete with all
                        essential amino acids
                      </span>
                    </div>
                    <div className="highlight-item">
                      <CheckCircle className="highlight-icon" />
                      <span>
                        <strong>100+ Nutrients</strong> - Vitamins, minerals &
                        antioxidants
                      </span>
                    </div>
                    <div className="highlight-item">
                      <CheckCircle className="highlight-icon" />
                      <span>
                        <strong>98% Bioavailable</strong> - Absorbed in 30
                        minutes
                      </span>
                    </div>
                    <div className="highlight-item">
                      <CheckCircle className="highlight-icon" />
                      <span>
                        <strong>95% Less Water</strong> - Sustainable production
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="visual-comparison">
                <h3 className="section-title-enhanced">
                  Spirulina vs Common Foods
                </h3>
                <div className="comparison-grid">
                  <div className="comparison-item">
                    <div className="food-name">Spirulina (10g)</div>
                    <div className="nutrient-bar spirulina-bar"></div>
                    <div className="nutrient-value">6.5g Protein</div>
                  </div>
                  <div className="comparison-item">
                    <div className="food-name">Meat (10g)</div>
                    <div className="nutrient-bar meat-bar"></div>
                    <div className="nutrient-value">2.6g Protein</div>
                  </div>
                  <div className="comparison-item">
                    <div className="food-name">Eggs (10g)</div>
                    <div className="nutrient-bar egg-bar"></div>
                    <div className="nutrient-value">1.3g Protein</div>
                  </div>
                  <div className="comparison-item">
                    <div className="food-name">Spinach (10g)</div>
                    <div className="nutrient-bar spinach-bar"></div>
                    <div className="nutrient-value">0.3g Protein</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ancient History Section */}
        <section className="spirulina-history-enhanced">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title-enhanced">
                Ancient Wisdom, Modern Science
              </h2>
              <p className="section-subtitle-enhanced">
                From Earth's first oxygen creators to today's most researched
                superfood
              </p>
            </div>

            <div className="timeline-enhanced">
              <div className="timeline-item">
                <div className="timeline-date">3.5 Billion Years Ago</div>
                <div className="timeline-content">
                  <h4>Earth's First Life Forms</h4>
                  <p>
                    Spirulina emerged as one of Earth's first life forms,
                    creating our oxygen-rich atmosphere through photosynthesis
                    and making complex life possible.
                  </p>
                  <div className="timeline-icon">🌍</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">16th Century</div>
                <div className="timeline-content">
                  <h4>Aztec Superfood</h4>
                  <p>
                    Aztecs harvested "Tecuitlatl" from Lake Texcoco, using it as
                    their primary protein source. Warriors consumed spirulina
                    cakes for strength and endurance during long journeys.
                  </p>
                  <div className="timeline-icon">🏺</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Present Day</div>
                <div className="timeline-content">
                  <h4>Chad's Living Tradition</h4>
                  <p>
                    The Kanembu people around Lake Chad continue their ancestral
                    practice, creating nutrient-rich "Dihe" cakes that serve as
                    essential dietary supplements.
                  </p>
                  <div className="timeline-icon">🥮</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">1960s-Present</div>
                <div className="timeline-content">
                  <h4>Scientific Revolution</h4>
                  <p>
                    French researchers rediscovered spirulina's potential,
                    leading to UNESCO and WHO recognition as "the best food for
                    humanity" and extensive clinical research worldwide.
                  </p>
                  <div className="timeline-icon">🔬</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Powerhouse Section */}
        <section className="nutritional-powerhouse-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title-enhanced">
                Complete Nutritional Profile
              </h2>
              <p className="section-subtitle-enhanced">
                Every essential nutrient your body needs, perfectly balanced by
                nature
              </p>
            </div>

            <div className="nutrition-table-container">
              <table className="nutrition-table-main">
                <thead>
                  <tr>
                    <th>Nutrient Category</th>
                    <th>Nutrient Details</th>
                    <th>Benefits & Effects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="category-cell">
                      <div className="category-header">
                        <span className="category-icon">🥩</span>
                        <h3>Premium Protein</h3>
                        <div className="main-stat">65-70%</div>
                      </div>
                    </td>
                    <td className="details-cell">
                      <ul>
                        <li>
                          <strong>Protein Content:</strong> 6.5g per 10g serving
                        </li>
                        <li>
                          <strong>Bioavailability:</strong> 98% (vs 85% meat)
                        </li>
                        <li>
                          <strong>Essential Amino Acids:</strong> All 9 present
                        </li>
                        <li>
                          <strong>Digestibility:</strong> 95% absorption rate
                        </li>
                      </ul>
                    </td>
                    <td className="benefits-cell">
                      <ul>
                        <li>Complete protein source for muscle building</li>
                        <li>Superior absorption compared to animal proteins</li>
                        <li>Supports tissue repair and growth</li>
                        <li>Ideal for athletes and fitness enthusiasts</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="category-cell">
                      <div className="category-header">
                        <span className="category-icon">💊</span>
                        <h3>Essential Vitamins</h3>
                        <div className="main-stat">12+</div>
                      </div>
                    </td>
                    <td className="details-cell">
                      <ul>
                        <li>
                          <strong>Vitamin B12:</strong> 250% DV
                        </li>
                        <li>
                          <strong>Beta-carotene:</strong> 1400% DV
                        </li>
                        <li>
                          <strong>B-Complex:</strong> Complete support
                        </li>
                        <li>
                          <strong>Vitamin K1:</strong> 32% DV
                        </li>
                        <li>
                          <strong>Folate:</strong> 15% DV
                        </li>
                      </ul>
                    </td>
                    <td className="benefits-cell">
                      <ul>
                        <li>Supports nervous system and brain function</li>
                        <li>Enhances vision and skin health</li>
                        <li>Boosts energy and metabolism</li>
                        <li>Strengthens bones and blood clotting</li>
                        <li>Supports cell division and DNA synthesis</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="category-cell">
                      <div className="category-header">
                        <span className="category-icon">⚡</span>
                        <h3>Essential Minerals</h3>
                        <div className="main-stat">15+</div>
                      </div>
                    </td>
                    <td className="details-cell">
                      <ul>
                        <li>
                          <strong>Iron:</strong> 28.5mg (158% DV)
                        </li>
                        <li>
                          <strong>Calcium:</strong> 120mg (12% DV)
                        </li>
                        <li>
                          <strong>Magnesium:</strong> 195mg (49% DV)
                        </li>
                        <li>
                          <strong>Potassium:</strong> 1363mg (39% DV)
                        </li>
                        <li>
                          <strong>Zinc:</strong> 2mg (18% DV)
                        </li>
                        <li>
                          <strong>Copper:</strong> 0.8mg (90% DV)
                        </li>
                        <li>
                          <strong>Manganese:</strong> 1.9mg (95% DV)
                        </li>
                        <li>
                          <strong>Selenium:</strong> 7.2μg (13% DV)
                        </li>
                      </ul>
                    </td>
                    <td className="benefits-cell">
                      <ul>
                        <li>Prevents anemia and boosts energy levels</li>
                        <li>Strengthens bones and teeth</li>
                        <li>Supports muscle and nerve function</li>
                        <li>Regulates blood pressure and heart health</li>
                        <li>Enhances immune system function</li>
                        <li>Supports antioxidant enzyme production</li>
                        <li>Protects against oxidative stress</li>
                        <li>Supports thyroid function</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="category-cell">
                      <div className="category-header">
                        <span className="category-icon">🛡️</span>
                        <h3>Powerful Antioxidants</h3>
                        <div className="main-stat">20%</div>
                      </div>
                    </td>
                    <td className="details-cell">
                      <ul>
                        <li>
                          <strong>Phycocyanin:</strong> 20% total content
                        </li>
                        <li>
                          <strong>Chlorophyll:</strong> 1100mg per 100g
                        </li>
                        <li>
                          <strong>Carotenoids:</strong> 400mg per 100g
                        </li>
                        <li>
                          <strong>SOD Enzyme:</strong> 25,000 units
                        </li>
                      </ul>
                    </td>
                    <td className="benefits-cell">
                      <ul>
                        <li>Fights free radicals and oxidative stress</li>
                        <li>Detoxifies blood and liver function</li>
                        <li>Protects against UV damage and aging</li>
                        <li>Reduces inflammation throughout the body</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Health Benefits Section */}
        <section className="health-benefits-enhanced">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title-enhanced">
                Scientifically Proven Health Benefits
              </h2>
              <p className="section-subtitle-enhanced">
                Clinical research validates what ancient civilizations knew
                intuitively
              </p>
            </div>

            <div className="benefits-grid-enhanced">
              <div className="benefit-card-primary">
                <div className="benefit-header-row">
                  <div className="benefit-stat-large">37%</div>
                  <h4 className="benefit-title-green">Immune System Boost</h4>
                </div>
                <p style={{ textAlign: "left" }}>
                  Increases natural killer cell activity and antibody production
                </p>
                <div className="research-note" style={{ textAlign: "left" }}>
                  Published in Journal of Nutritional Science
                </div>
              </div>

              <div className="benefit-card-primary">
                <div className="benefit-header-row">
                  <div className="benefit-stat-large">25%</div>
                  <h4 className="benefit-title-green">Exercise Performance</h4>
                </div>
                <p style={{ textAlign: "left" }}>
                  Improves endurance and reduces muscle fatigue
                </p>
                <div className="research-note" style={{ textAlign: "left" }}>
                  Sports Medicine Research
                </div>
              </div>

              <div className="benefit-card-primary">
                <div className="benefit-header-row">
                  <div className="benefit-stat-large">16%</div>
                  <h4 className="benefit-title-green">Cholesterol Reduction</h4>
                </div>
                <p style={{ textAlign: "left" }}>
                  Lowers bad cholesterol while maintaining good cholesterol
                </p>
                <div className="research-note" style={{ textAlign: "left" }}>
                  Cardiovascular Health Studies
                </div>
              </div>

              <div className="benefit-card-primary">
                <div className="benefit-header-row">
                  <div className="benefit-stat-large">30%</div>
                  <h4 className="benefit-title-green">
                    Inflammation Reduction
                  </h4>
                </div>
                <p style={{ textAlign: "left" }}>
                  Powerful anti-inflammatory effects throughout the body
                </p>
                <div className="research-note" style={{ textAlign: "left" }}>
                  Clinical Nutrition Journal
                </div>
              </div>
            </div>

            <div className="additional-benefits-enhanced">
              <h3 className="section-title-enhanced">
                Complete Health Transformation
              </h3>
              <div className="benefits-columns">
                <div className="benefits-column">
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      color: "#000000",
                      marginBottom: "1.2rem",
                      textAlign: "left",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    🧠 Cognitive Health
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Enhanced memory and focus
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Neuroprotective properties
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Improved mental clarity
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Reduced brain fog
                    </li>
                  </ul>
                </div>

                <div className="benefits-column">
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      color: "#000000",
                      marginBottom: "1.2rem",
                      textAlign: "left",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    💪 Physical Performance
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Increased energy and stamina
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Faster muscle recovery
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Enhanced oxygen delivery
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Reduced fatigue
                    </li>
                  </ul>
                </div>

                <div className="benefits-column">
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      color: "#000000",
                      marginBottom: "1.2rem",
                      textAlign: "left",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    ✨ Beauty & Vitality
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Radiant, healthy skin
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Stronger hair and nails
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Natural detoxification
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Anti-aging properties
                    </li>
                  </ul>
                </div>

                <div className="benefits-column">
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      color: "#000000",
                      marginBottom: "1.2rem",
                      textAlign: "left",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    🛡️ Disease Prevention
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Diabetes management
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Heart health support
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0.7rem",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Cancer prevention properties
                    </li>
                    <li
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "0",
                        paddingLeft: "1.2rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontWeight: "600",
                        }}
                      >
                        •
                      </span>
                      Liver protection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Essential Today Section */}
        <section className="modern-necessity-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title-enhanced">
                Why Spirulina is Essential in 2025
              </h2>
              <p className="section-subtitle-enhanced">
                Modern challenges require ancient solutions
              </p>
            </div>

            <div className="necessity-grid">
              <div className="necessity-card">
                <div className="necessity-icon">🌍</div>
                <h3>Nutrient-Depleted Food</h3>
                <div className="problem-solution">
                  <div className="problem">
                    <strong>Problem:</strong> Soil nutrients depleted by 40%
                    over 50 years
                  </div>
                  <div className="solution">
                    <strong>Solution:</strong> 1 tsp = 5+ servings of vegetables
                  </div>
                </div>
              </div>

              <div className="necessity-card">
                <div className="necessity-icon">⚡</div>
                <h3>High-Stress Lifestyle</h3>
                <div className="problem-solution">
                  <div className="problem">
                    <strong>Problem:</strong> Stress depletes energy & weakens
                    immunity
                  </div>
                  <div className="solution">
                    <strong>Solution:</strong> Adaptogenic properties for
                    sustained energy
                  </div>
                </div>
              </div>

              <div className="necessity-card">
                <div className="necessity-icon">🌱</div>
                <h3>Plant-Based Nutrition</h3>
                <div className="problem-solution">
                  <div className="problem">
                    <strong>Challenge:</strong> Often lacks complete proteins &
                    B12
                  </div>
                  <div className="solution">
                    <strong>Solution:</strong> Only plant source with complete
                    protein + B12
                  </div>
                </div>
              </div>

              <div className="necessity-card">
                <div className="necessity-icon">🛡️</div>
                <h3>Environmental Toxins</h3>
                <div className="problem-solution">
                  <div className="problem">
                    <strong>Problem:</strong> Daily exposure overwhelms detox
                    systems
                  </div>
                  <div className="solution">
                    <strong>Solution:</strong> Chlorophyll & phycocyanin
                    eliminate toxins
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cyano Foods Advantage Section */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 left-8 w-16 h-16 opacity-10">
              <img
                src="/oi.png"
                alt=""
                className="w-full h-full object-contain transform rotate-12"
              />
            </div>
            <div className="absolute bottom-8 right-8 w-20 h-20 opacity-15">
              <img
                src="/oi.png"
                alt=""
                className="w-full h-full object-contain transform -rotate-45"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="section-title-enhanced">
                Why Cyano Foods Spirulina is Superior
              </h2>
              <p className="section-subtitle-enhanced">
                Not all spirulina is created equal - here's what sets us apart
              </p>
            </div>

            {/* Quality Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg">
                    <span className="text-emerald-700 text-xl">💪</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">
                    SUPERIOR
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  70% Protein Content
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  Industry average: 58%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                    <span className="text-blue-700 text-xl">🧬</span>
                  </div>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                    PREMIUM
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  20% Phycocyanin
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  Industry average: 12%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "83%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg">
                    <span className="text-green-700 text-xl">🌿</span>
                  </div>
                  <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                    PURE
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Zero Contamination
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  Industry: Detectable levels
                </p>
                <div className="flex items-center">
                  <span className="text-green-600 text-sm font-medium">
                    0 ppm Heavy Metals
                  </span>
                  <span className="ml-2 text-green-600">✓</span>
                </div>
              </div>
            </div>

            {/* Processing Excellence */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="section-title-enhanced mb-6">
                  Our Cultivation Excellence
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-50 rounded-lg flex-shrink-0">
                      <span className="text-emerald-700 text-lg">🏭</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Controlled Environment
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Closed-system cultivation prevents contamination &
                        ensures consistency
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-lg flex-shrink-0">
                      <span className="text-orange-700 text-lg">🌡️</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Low-Temperature Processing
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Below 60°C preserves heat-sensitive nutrients &
                        maintains potency
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg flex-shrink-0">
                      <span className="text-blue-700 text-lg">🔬</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Third-Party Testing
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every batch tested for contaminants. Undetectable levels
                        guaranteed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-50 rounded-lg flex-shrink-0">
                      <span className="text-purple-700 text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Premium Certifications
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        USDA Organic, FSSAI, GMP certified for highest quality
                        standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌿</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        95%+ Nutrient Retention
                      </h4>
                      <p className="text-gray-600 text-sm">
                        vs 70-75% industry average
                      </p>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
                    <span className="text-emerald-600 text-sm font-medium">
                      Certified Organic
                    </span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
                    <span className="text-blue-600 text-sm font-medium">
                      Lab Tested
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="usage-guide-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title-enhanced">How to Use Spirulina</h2>
              <p className="section-subtitle-enhanced">
                Simple ways to incorporate this superfood into your daily
                routine
              </p>
            </div>

            <div className="necessity-grid">
              <div className="necessity-card">
                <div className="necessity-icon">📏</div>
                <h3>Dosage Guide</h3>
                <p>
                  <strong>Kids:</strong> 1–2g • <strong>Adults:</strong> 3–5g •{" "}
                  <strong>Athletes:</strong> 5–10g
                </p>
                <p>
                  <strong>Ways to take:</strong> Smoothies, juice, honey +
                  lemon, plant milk
                </p>
              </div>

              <div className="necessity-card">
                <div className="necessity-icon">🕒</div>
                <h3>Best Timing</h3>
                <p>
                  <strong>Morning:</strong> Empty stomach
                </p>
                <p>
                  <strong>Pre-workout:</strong> 30–60 min before
                </p>
                <p>
                  <strong>Post-workout:</strong> Within 2 hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="spirulina-cta-section">
          <div className="container">
            <div className="spirulina-cta-content">
              <div className="cta-main">
                <h2>Ready to Transform Your Health?</h2>
                <p>
                  Join thousands who have discovered the life-changing power of
                  premium spirulina. Experience the difference that 3.5 billion
                  years of evolution has created.
                </p>
              </div>

              <div className="cta-action">
                <Button
                  className="spirulina-cta-button"
                  onClick={() => {
                    navigate("/", { replace: false });
                    // Safety: ensure scroll at top after navigation
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "auto" }),
                      0
                    );
                  }}
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpiruliaPage;
