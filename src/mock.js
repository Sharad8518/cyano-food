// Mock data for Cyano Foods India Landing Page
// This file contains all the mock data that will later be replaced with backend API calls

export const mockData = {
  // Company Information
  company: {
    name: "Cyano Foods India OPC Pvt Ltd",
    tagline: "Empowering Health and Agriculture Naturally",
    mission: "A healthier generation and a greener earth are not dreams—they are decisions we make every day.",
    description: "Founded with a vision to harness the power of Spirulina and other natural superfoods, we offer a wide range of healthcare and agricultural products that deliver real results, with no compromise in quality.",
    founded: "2022",
    location: "Hyderabad, Telangana, India",
    email: "mail@cyanoindia.com",
    phone: "+91 8924945678",
    whatsapp: "+91 8924945678"
  },

  // Divisions
  divisions: {
    veda: {
      name: "Cyano Veda",
      tagline: "Healing Naturally with Spirulina",
      description: "Premium spirulina-based health and wellness products",
      logo: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
    },
    crennis: {
      name: "Cyano Crennis", 
      tagline: "Plant Health Enhancers",
      description: "Sustainable bio-agriculture solutions for modern farming",
      logo: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
    }
  },

  // Health Products (Cyano Veda)
  healthProducts: [
    {
      id: 1,
      name: "Spirulina Jelly Candies",
      category: "health",
      division: "veda",
      description: "Delicious spirulina-infused energy bites for kids and adults. Rich in plant-based protein, vitamins and minerals.",
      detailedDescription: "These candies are crafted by blending organic spirulina into a chewy, flavorful jelly format. Designed to be both delicious and nutritious, they're suitable for kids and adults alike.",
      benefits: [
        "Boosts immunity and increases stamina",
        "Supports digestion and gut health", 
        "Detoxifying effects—anti-inflammatory, antioxidant action",
        "Enhances mental alertness",
        "Contributes to healthy skin and hair"
      ],
      ingredients: ["Organic Spirulina", "Natural Sweeteners", "Phycocyanin"],
      usage: "1-2 candies per day as a supplement—not a meal replacement",
      price: "₹299",
      originalPrice: "₹399",
      inStock: true,
      rating: 4.8,
      reviews: 152,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
    },
    {
      id: 2,
      name: "Pure Organic Spirulina Powder",
      category: "health",
      division: "veda",
      description: "Nature's most complete superfood. Pure spirulina powder packed with 60-70% protein and essential amino acids.",
      detailedDescription: "Organic Spirulina is a nutrient-dense blue-green algae known as one of nature's most powerful superfoods. Packed with over 60% protein, essential amino acids, vitamins, minerals, and antioxidants.",
      benefits: [
        "60-70% complete protein with all 9 essential amino acids",
        "Rich in vitamins B1, B2, B3, B6, B12, E, K",
        "High in iron (3x spinach), calcium, magnesium",
        "Powerful antioxidants including phycocyanin",
        "Supports immunity, energy and detoxification"
      ],
      ingredients: ["100% Pure Organic Spirulina", "No additives or preservatives"],
      usage: "1-3 grams daily (Mix in smoothies, juices, or meals)",
      sizes: ["100g", "200g", "500g"],
      price: "₹599",
      originalPrice: "₹799",
      inStock: true,
      rating: 4.9,
      reviews: 287,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
    },
    {
      id: 3,
      name: "Spirulina Shampoo with 30 Herbs",
      category: "health",
      division: "veda",
      description: "Natural shampoo infused with spirulina and 30 herbal extracts. Nourishes the scalp and promotes healthy hair growth.",
      detailedDescription: "Premium, natural hair care solution formulated with pure organic spirulina and a powerful blend of 30 herbal extracts. Sourced from the lush forests of Dang, Gujarat.",
      benefits: [
        "Stimulates hair growth & strengthens roots",
        "Reduces hair fall, dandruff & dryness", 
        "Enhances shine, softness & hydration",
        "Naturally nourishes & repairs damaged hair",
        "Free from sulfates, parabens & artificial chemicals"
      ],
      ingredients: ["Organic Spirulina", "30 Herbal Extracts", "Natural Oils"],
      usage: "Apply to wet hair, gently massage into scalp, rinse thoroughly. Use regularly for best results.",
      price: "₹399",
      originalPrice: "₹499",
      inStock: true,
      rating: 4.7,
      reviews: 94,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
    },
    {
      id: 4,
      name: "Spirulina Hair Oil with 30 Herbs",
      category: "health", 
      division: "veda",
      description: "Premium hair oil with spirulina and 30 Ayurvedic herbs. Nourishes the scalp and promotes optimal hair growth.",
      detailedDescription: "Premium blend of pure organic spirulina and 30 powerful Ayurvedic herbs, designed to nourish the scalp, strengthen hair, and promote optimal growth.",
      benefits: [
        "Strengthens hair from roots & reduces breakage",
        "Stimulates hair growth & prevents premature graying",
        "Nourishes the scalp & controls dandruff", 
        "Deeply conditions for soft, shiny hair",
        "100% natural, free from chemicals & artificial fragrances"
      ],
      ingredients: ["Organic Spirulina", "30 Ayurvedic Herbs", "Natural Carrier Oils"],
      usage: "Warm a small amount & gently massage into scalp. Leave for 2-3 hours or overnight. Use 2-3 times a week.",
      price: "₹549",
      originalPrice: "₹699",
      inStock: true,
      rating: 4.8,
      reviews: 126,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
    },
    {
      id: 5,
      name: "Spirulina Soap Collection",
      category: "health",
      division: "veda", 
      description: "Handcrafted natural soaps infused with spirulina and complementary ingredients for radiant, healthy skin.",
      detailedDescription: "Collection of handcrafted, all-natural soaps including Spirulina-Turmeric, Spirulina-Beetroot, Spirulina-Coffee, and Pure Spirulina variants.",
      benefits: [
        "Deeply cleanses and detoxifies skin",
        "Provides hydration and nourishment",
        "Reduces blemishes and dark spots",
        "Promotes even skin tone and natural glow",
        "Free from harsh chemicals and parabens"
      ],
      variants: [
        "Spirulina-Turmeric Soap",
        "Spirulina-Beetroot Soap", 
        "Spirulina-Coffee Soap",
        "Pure Spirulina Soap",
        "Phycocyanin Soap"
      ],
      ingredients: ["Organic Spirulina", "Natural Complementary Ingredients", "Essential Oils"],
      usage: "Lather on wet skin, massage gently, rinse thoroughly. Use daily for best results.",
      price: "₹199",
      originalPrice: "₹249",
      inStock: true,
      rating: 4.6,
      reviews: 218,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/zldtdb21_WhatsApp%20Image%202025-08-03%20at%2010.39.46%20%281%29.jpeg"
    }
  ],

  // Agriculture Products (Cyano Crennis)
  agricultureProducts: [
    {
      id: 6,
      name: "Dhenu Gold",
      category: "agriculture",
      division: "crennis",
      description: "Scientifically formulated blend of cow urine powder, natural plants and spirulina for comprehensive soil enhancement.",
      detailedDescription: "Dhenu Gold improves soil structure and increases water retention and germination capacity. It increases the size, colour and weight of fruits by developing flowers, which increases crop production capacity.",
      benefits: [
        "Improves soil structure and water retention",
        "Increases germination capacity and fruit development",
        "Enhances fertilizer efficiency by dissolving micronutrients",
        "Reduces chemical fertilizer requirement by 25-30%",
        "Suitable for all types of crops"
      ],
      ingredients: ["Cow Urine Powder", "Natural Plant Extracts", "Spirulina", "Micronutrients"],
      usage: "Use 1 kg per acre with 200 litres of water. Can be mixed with organic seeds or combined with chemical fertilizers.",
      suitableFor: ["Cumin", "Cotton", "Groundnut", "Paddy", "Mango", "Papaya", "Pomegranate", "Vegetables", "Spices"],
      price: "₹799",
      originalPrice: "₹999",
      inStock: true,
      rating: 4.9,
      reviews: 89,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
    },
    {
      id: 7,
      name: "Dhan Rakshak",
      category: "agriculture",
      division: "crennis",
      description: "Herbal plant pesticide blend that forms a protective shield and disrupts pest life cycles naturally.",
      detailedDescription: "Scientifically formulated herbal plant pesticide blend with natural plants and cow dung. Protects plants and crops from insects and animals while controlling sap-sucking insects.",
      benefits: [
        "Forms protective shield on plants, fruits and flowers",
        "Natural smell keeps insects away",
        "Disrupts insect life cycles effectively", 
        "Reduces chemical pesticide dependency",
        "Safe for environment and beneficial insects"
      ],
      ingredients: ["Natural Plant Extracts", "Cow Dung", "Herbal Compounds", "Essential Oils"],
      usage: "Spray 50-60 ml in 15 litres of water. Use 3-4 times at 5-7 day intervals.",
      suitableFor: ["All vegetable crops", "Horticultural crops", "Spices", "Medicinal plants", "Flowers"],
      price: "₹449",
      originalPrice: "₹599",
      inStock: true,
      rating: 4.7,
      reviews: 67,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
    },
    {
      id: 8,
      name: "Dhan Vruddhi",
      category: "agriculture",
      division: "crennis",
      description: "Organic mixture of fermented seaweed and cow urine that provides essential nutrition and strengthens crops.",
      detailedDescription: "Made from various organic elements based on ancient knowledge. Scientifically prepared organic mixture prepared by fermenting seaweed and cow urine, beneficial for soil improvement and plant nutrition.",
      benefits: [
        "Provides essential nutrition to crops",
        "Increases disease resistance and reduces yellowing",
        "Accelerates food transport due to increased green cells",
        "Makes crops strong and abundant",
        "Improves overall plant health"
      ],
      ingredients: ["Fermented Seaweed", "Cow Urine", "Natural Organic Compounds", "Micronutrients"],
      usage: "Use 80-100 ml per spray pump 3-4 times. For sprinkler irrigation, mix 2 litres per acre.",
      suitableFor: ["Cotton", "Groundnut", "Paddy", "Wheat", "Vegetables", "Spices", "Horticultural crops"],
      price: "₹649",
      originalPrice: "₹799",
      inStock: true,
      rating: 4.8,
      reviews: 103,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
    },
    {
      id: 9,
      name: "Dhan Bhumi",
      category: "agriculture",
      division: "crennis", 
      description: "Organic soil nutrient mixture that improves soil health and enhances root development for better nutrient absorption.",
      detailedDescription: "Organic soil nutrient mixture prepared based on ancient knowledge, made with scientific organic combination of seaweed, various herbal plants and cow urine.",
      benefits: [
        "Improves soil health and provides essential nutrition",
        "Controls soil-borne diseases effectively",
        "Enhances root development for better nutrient absorption",
        "Increases production and reduces fertilizer costs",
        "Suitable for all soil types and crops"
      ],
      ingredients: ["Seaweed Extract", "Herbal Plants", "Cow Urine", "Soil Conditioners"],
      usage: "Use 2 litres per acre during sowing through irrigation. Apply every 10 days for 3-4 times.",
      suitableFor: ["Cotton", "Peanuts", "Wheat", "Rice", "All vegetables", "Spices", "Horticultural crops"],
      price: "₹729",
      originalPrice: "₹899",
      inStock: true,
      rating: 4.9,
      reviews: 156,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
    },
    {
      id: 10,
      name: "PROM with Spirulina",
      category: "agriculture",
      division: "crennis",
      description: "Phosphate Rich Organic Manure combined with spirulina for comprehensive soil health regeneration and yield improvement.",
      detailedDescription: "Innovative bio-based fertilizer designed to supply phosphorus using eco-friendly inputs. When combined with Spirulina, it transforms into a next-generation soil enhancer.",
      benefits: [
        "Improves root development and flowering/fruiting",
        "Regenerates soil health and increases microbial biomass", 
        "Enhances moisture retention in sandy/dry soils",
        "Detoxifies soil from heavy metals and pesticide residues",
        "Increases yield by 10-20% in trials"
      ],
      ingredients: ["Phosphate Rich Organic Matter", "Spirulina", "Bentonite", "Micronutrients"],
      usage: "Apply 50-100 kg per acre as basal application. Broadcast and incorporate into topsoil (5-7 cm).",
      applicationTime: "Pre-sowing or at time of sowing/transplanting",
      suitableFor: ["Cereals", "Vegetables", "Pulses", "All major crops"],
      price: "₹899",
      originalPrice: "₹1199",
      inStock: true,
      rating: 4.9,
      reviews: 78,
      image: "https://customer-assets.emergentagent.com/job_c3079fcf-8a90-44f2-8fb9-6131743c2eca/artifacts/44y1nziq_WhatsApp%20Image%202025-08-03%20at%2010.39.47%20%281%29.jpeg"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Nutritionist",
      location: "Mumbai, Maharashtra",
      content: "Cyano's spirulina products have remarkable quality. My patients have shown significant improvements in energy levels and overall health. The jelly candies are especially popular with children.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
      date: "2024-12-15"
    },
    {
      id: 2, 
      name: "Ramesh Kumar",
      role: "Organic Farmer",
      location: "Nashik, Maharashtra",
      content: "Using Dhenu Gold transformed my soil quality completely. My crop yield increased by 18% while reducing chemical dependency significantly. My tomatoes and onions are healthier than ever.",
      rating: 5,
      avatar: "/api/placeholder/64/64", 
      date: "2024-11-28"
    },
    {
      id: 3,
      name: "Meera Patel",
      role: "Health Enthusiast & Mother",
      location: "Ahmedabad, Gujarat", 
      content: "The spirulina candies are a hit with my kids! Finally, a healthy snack they actually enjoy eating daily. I've noticed improved immunity and energy in my family.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
      date: "2024-12-03"
    },
    {
      id: 4,
      name: "Suresh Reddy",
      role: "Cotton Farmer",
      location: "Warangal, Telangana",
      content: "Dhan Rakshak has been a game-changer for pest control. Natural, effective, and doesn't harm beneficial insects. My cotton yield improved by 22% this season.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
      date: "2024-11-15"
    },
    {
      id: 5,
      name: "Anjali Singh",
      role: "Wellness Coach", 
      location: "Pune, Maharashtra",
      content: "I recommend Cyano's spirulina powder to all my clients. The quality is exceptional and the results speak for themselves. It's become an essential part of my wellness programs.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
      date: "2024-12-08"
    }
  ],

  // Key Statistics  
  statistics: [
    {
      number: "10,000+",
      label: "Happy Customers",
      description: "Families and farmers trust our products"
    },
    {
      number: "25%", 
      label: "Chemical Reduction",
      description: "Average reduction in chemical fertilizer use"
    },
    {
      number: "15%",
      label: "Yield Increase",
      description: "Average crop yield improvement"
    },
    {
      number: "2022",
      label: "Founded",
      description: "Years of dedicated research and innovation"
    }
  ],

  // FAQ Data
  faqs: [
    {
      id: 1,
      question: "What is Spirulina and why is it beneficial?",
      answer: "Spirulina is a blue-green microalgae that's one of the most nutrient-dense superfoods on Earth. It contains 60-70% complete protein, all essential amino acids, vitamins, minerals, and powerful antioxidants like phycocyanin. It supports immunity, energy, detoxification, and overall wellness."
    },
    {
      id: 2,
      question: "How do your agricultural products help farmers?", 
      answer: "Our Crennis products like Dhenu Gold and PROM with Spirulina help farmers reduce chemical dependency by 25-30%, improve soil health, increase crop yields by 10-20%, and promote sustainable farming practices while maintaining or improving profitability."
    },
    {
      id: 3,
      question: "Are your products safe for children?",
      answer: "Yes! Our spirulina candies are specially formulated for children and adults alike. They're made with natural ingredients, contain no artificial preservatives, and provide essential nutrients in a delicious, kid-friendly format."
    },
    {
      id: 4,
      question: "What makes Cyano Foods different from other companies?",
      answer: "We're unique in addressing both human health and agricultural needs through spirulina-based innovation. Our products are backed by science, rooted in traditional wisdom, and made with zero compromise on quality. We're also committed to sustainability and environmental protection."
    },
    {
      id: 5,
      question: "How should I store your products?",
      answer: "Store spirulina powder and candies in a cool, dry place away from direct sunlight. Agricultural products should be stored in their original packaging in a dry location. Always check individual product labels for specific storage instructions."
    },
    {
      id: 6,
      question: "Do you offer bulk orders for farmers?",
      answer: "Yes, we offer bulk pricing for agricultural products. Farmers can contact us directly for wholesale rates and volume discounts. We also provide technical support and guidance for product application."
    }
  ],

  // Founders Information
  founders: [
    {
      name: "Swathi Jandhyala",
      role: "Founder & CEO",
      description: "Swathi Jandhyala is a passionate innovator, entrepreneur, and advocate for natural health and sustainable agriculture. With deep-rooted belief in nature's healing power and a background in Spirulina research, she founded Cyano Foods India with one mission: to create a healthier next generation through pure, natural solutions.",
      quote: "Real change starts from the root — whether it's our food, our soil, or our values.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sastry Jandhyala", 
      role: "Co-Founder",
      description: "Sastry Jandhyala is a visionary entrepreneur passionate about natural health and sustainable agriculture. Co-founding Cyano Foods India, he champions Spirulina as a superfood for public health and a regenerative farming catalyst.",
      quote: "Our work is not just business — it is a responsibility to the next generation.",
      image: "/api/placeholder/300/300"
    }
  ],

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/cyanofoodsindia",
    instagram: "https://instagram.com/cyanofoodsindia", 
    twitter: "https://twitter.com/cyanofoodsindia",
    linkedin: "https://linkedin.com/company/cyanofoodsindia",
    youtube: "https://youtube.com/@cyanofoodsindia"
  },

  // Certifications
  certifications: [
    "USDA Organic Certified",
    "FSSAI Approved", 
    "GMP Certified",
    "ISO 9001:2015",
    "Organic India Certified"
  ]
};

export default mockData;