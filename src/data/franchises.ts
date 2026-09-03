import coffeeFranchise from "@/assets/franchise-coffee.jpg";
import fitnessFranchise from "@/assets/franchise-fitness.jpg";
import restaurantFranchise from "@/assets/franchise-restaurant.jpg";
import retailFranchise from "@/assets/franchise-retail.jpg";
import educationFranchise from "@/assets/franchise-education.jpg";
import automotiveFranchise from "@/assets/franchise-automotive.jpg";

export interface Franchise {
  id: string;
  name: string;
  category: string;
  investment: string;
  minInvestment: number;
  description: string;
  fullDescription: string;
  image: string;
  roi: string;
  phone: string;
  unitsOperating: number;
  yearFounded: number;
  territories: string;
  support: string[];
  requirements: string[];
}

const franchises: Franchise[] = [
  // =========================================================
  // FOOD & BEVERAGE
  // =========================================================

  {
    id: "premium-coffee-co",
    name: "Premium Coffee Co.",
    category: "Food & Beverage",
    investment: "$250K - $450K",
    minInvestment: 250000,
    description:
      "Award-winning specialty coffee franchise with proven success in premium locations.",
    fullDescription:
      "Premium Coffee Co. has revolutionized the specialty coffee experience with our unique blend of artisanal craftsmanship and modern efficiency. Our franchise partners benefit from our established supply chain, comprehensive training programs, and ongoing support.",
    image: coffeeFranchise,
    roi: "25-35%",
    phone: "+1 (800) 555-0101",
    unitsOperating: 247,
    yearFounded: 2015,
    territories: "Available nationwide",
    support: [
      "Comprehensive 6-week training program",
      "Site selection assistance",
      "Marketing and advertising support",
      "Ongoing operational support",
      "Supply chain management",
      "Technology and POS systems",
    ],
    requirements: [
      "Minimum liquid capital: $150,000",
      "Net worth: $500,000",
      "Business management experience preferred",
      "Passion for coffee and customer service",
    ],
  },

  {
    id: "fresh-bite-kitchen",
    name: "Fresh Bite Kitchen",
    category: "Food & Beverage",
    investment: "$180K - $350K",
    minInvestment: 180000,
    description:
      "Healthy fast-casual restaurant serving fresh meals made from quality ingredients.",
    fullDescription:
      "Fresh Bite Kitchen is a growing fast-casual restaurant brand focused on healthy, convenient, and affordable meals. Franchise partners receive complete operational training, marketing support, and access to established supplier relationships.",
    image: restaurantFranchise,
    roi: "24-34%",
    phone: "+1 (800) 555-0102",
    unitsOperating: 118,
    yearFounded: 2018,
    territories: "Urban and suburban markets",
    support: [
      "Restaurant setup assistance",
      "Staff training",
      "Marketing campaigns",
      "Menu development",
      "Supplier management",
      "POS and ordering technology",
    ],
    requirements: [
      "Minimum liquid capital: $120,000",
      "Net worth: $400,000",
      "Restaurant experience preferred",
      "Strong customer service skills",
    ],
  },

  {
    id: "urban-brew-cafe",
    name: "Urban Brew Cafe",
    category: "Food & Beverage",
    investment: "$150K - $300K",
    minInvestment: 150000,
    description:
      "Modern cafe franchise combining specialty beverages, snacks, and a relaxed atmosphere.",
    fullDescription:
      "Urban Brew Cafe offers a modern cafe experience designed for high-traffic locations. Our franchise system includes standardized recipes, efficient store operations, comprehensive training, and strong digital marketing support.",
    image: coffeeFranchise,
    roi: "23-33%",
    phone: "+1 (800) 555-0103",
    unitsOperating: 86,
    yearFounded: 2019,
    territories: "Major cities and commercial areas",
    support: [
      "Store design assistance",
      "Barista training",
      "Digital marketing",
      "Supplier partnerships",
      "Operations support",
      "Technology systems",
    ],
    requirements: [
      "Minimum liquid capital: $100,000",
      "Net worth: $350,000",
      "Customer service experience preferred",
      "Interest in food and beverage",
    ],
  },

  // =========================================================
  // HEALTH & FITNESS
  // =========================================================

  {
    id: "fitlife-365",
    name: "FitLife 365",
    category: "Health & Fitness",
    investment: "$400K - $800K",
    minInvestment: 400000,
    description:
      "Next-generation fitness centers combining technology, personal training, and community.",
    fullDescription:
      "FitLife 365 represents the future of fitness franchising. Our state-of-the-art facilities combine cutting-edge equipment, personalized training programs, and a strong sense of community.",
    image: fitnessFranchise,
    roi: "30-40%",
    phone: "+1 (800) 555-0104",
    unitsOperating: 156,
    yearFounded: 2017,
    territories: "Major metros and suburbs",
    support: [
      "Turnkey facility design and setup",
      "Staff recruitment and training",
      "Proprietary fitness app and technology",
      "National marketing campaigns",
      "Member retention programs",
      "24/7 operational support",
    ],
    requirements: [
      "Minimum liquid capital: $250,000",
      "Net worth: $1,000,000",
      "Multi-unit experience preferred",
      "Commitment to health and wellness",
    ],
  },

  {
    id: "wellness-hub",
    name: "Wellness Hub",
    category: "Health & Fitness",
    investment: "$200K - $450K",
    minInvestment: 200000,
    description:
      "Holistic wellness center offering fitness, recovery, and lifestyle services.",
    fullDescription:
      "Wellness Hub combines fitness, recovery, and wellness services under one modern franchise concept. Franchise owners receive support with facility development, staffing, marketing, and member acquisition.",
    image: fitnessFranchise,
    roi: "27-37%",
    phone: "+1 (800) 555-0105",
    unitsOperating: 74,
    yearFounded: 2019,
    territories: "Urban and suburban markets",
    support: [
      "Facility planning",
      "Staff training",
      "Marketing support",
      "Membership management system",
      "Wellness program development",
      "Operational consulting",
    ],
    requirements: [
      "Minimum liquid capital: $125,000",
      "Net worth: $450,000",
      "Management experience preferred",
      "Interest in wellness",
    ],
  },

  {
    id: "active-zone",
    name: "ActiveZone",
    category: "Health & Fitness",
    investment: "$120K - $250K",
    minInvestment: 120000,
    description:
      "Community-focused fitness studio offering affordable training and group classes.",
    fullDescription:
      "ActiveZone provides accessible fitness programs for individuals and families. Its smaller studio format allows franchise owners to operate with lower startup costs while benefiting from a proven membership model.",
    image: fitnessFranchise,
    roi: "26-36%",
    phone: "+1 (800) 555-0106",
    unitsOperating: 92,
    yearFounded: 2020,
    territories: "Residential and suburban areas",
    support: [
      "Studio setup",
      "Instructor training",
      "Membership software",
      "Social media marketing",
      "Launch campaigns",
      "Ongoing business coaching",
    ],
    requirements: [
      "Minimum liquid capital: $80,000",
      "Net worth: $300,000",
      "People management skills",
      "Passion for fitness",
    ],
  },

  // =========================================================
  // FASHION & RETAIL
  // =========================================================

  {
    id: "style-haven",
    name: "Style Haven",
    category: "Retail",
    investment: "$200K - $400K",
    minInvestment: 200000,
    description:
      "Contemporary fashion and accessories boutique with curated collections.",
    fullDescription:
      "Style Haven brings the boutique shopping experience to communities across the country. Our data-driven approach to inventory selection helps franchisees reduce waste while maximizing sales.",
    image: retailFranchise,
    roi: "22-32%",
    phone: "+1 (800) 555-0107",
    unitsOperating: 134,
    yearFounded: 2018,
    territories: "Shopping centers and main streets",
    support: [
      "Store design and merchandising",
      "Inventory management system",
      "Seasonal buying guidance",
      "E-commerce platform",
      "Social media marketing support",
      "Visual merchandising training",
    ],
    requirements: [
      "Minimum liquid capital: $100,000",
      "Net worth: $400,000",
      "Retail experience preferred",
      "Eye for fashion and trends",
    ],
  },

  {
    id: "urban-fashion",
    name: "Urban Fashion",
    category: "Retail",
    investment: "$300K - $600K",
    minInvestment: 300000,
    description:
      "Trendy fashion retailer focused on contemporary clothing and lifestyle products.",
    fullDescription:
      "Urban Fashion is a contemporary retail franchise offering clothing, footwear, accessories, and lifestyle products. Franchise partners receive access to centralized purchasing and proven merchandising strategies.",
    image: retailFranchise,
    roi: "24-34%",
    phone: "+1 (800) 555-0108",
    unitsOperating: 108,
    yearFounded: 2017,
    territories: "Major cities and shopping districts",
    support: [
      "Retail store design",
      "Inventory planning",
      "Purchasing support",
      "E-commerce integration",
      "Marketing campaigns",
      "Staff training",
    ],
    requirements: [
      "Minimum liquid capital: $180,000",
      "Net worth: $550,000",
      "Retail management experience preferred",
      "Strong communication skills",
    ],
  },

  {
    id: "trend-market",
    name: "Trend Market",
    category: "Retail",
    investment: "$150K - $300K",
    minInvestment: 150000,
    description:
      "Lifestyle retail franchise offering affordable fashion, accessories, and gifts.",
    fullDescription:
      "Trend Market provides customers with affordable fashion, accessories, gifts, and lifestyle products. The franchise model is designed for flexible retail spaces and high customer turnover.",
    image: retailFranchise,
    roi: "21-31%",
    phone: "+1 (800) 555-0109",
    unitsOperating: 76,
    yearFounded: 2020,
    territories: "Shopping centers and high streets",
    support: [
      "Store setup",
      "Inventory planning",
      "Marketing materials",
      "Retail training",
      "Supplier access",
      "Business coaching",
    ],
    requirements: [
      "Minimum liquid capital: $90,000",
      "Net worth: $300,000",
      "Retail experience helpful",
      "Interest in fashion and lifestyle",
    ],
  },

  // =========================================================
  // TECHNOLOGY
  // =========================================================

  {
    id: "tech-forward",
    name: "TechForward",
    category: "Technology",
    investment: "$180K - $350K",
    minInvestment: 180000,
    description:
      "Technology services franchise helping small businesses modernize their operations.",
    fullDescription:
      "TechForward provides IT consulting, cloud services, cybersecurity, and digital transformation solutions to small and medium-sized businesses.",
    image: retailFranchise,
    roi: "28-38%",
    phone: "+1 (800) 555-0110",
    unitsOperating: 67,
    yearFounded: 2018,
    territories: "Available nationwide",
    support: [
      "Technical training",
      "Business development support",
      "Lead generation",
      "Marketing campaigns",
      "CRM and technology systems",
      "Ongoing technical support",
    ],
    requirements: [
      "Minimum liquid capital: $100,000",
      "Net worth: $350,000",
      "Technology experience preferred",
      "Strong business communication skills",
    ],
  },

  {
    id: "digital-solutions-pro",
    name: "Digital Solutions Pro",
    category: "Technology",
    investment: "$100K - $250K",
    minInvestment: 100000,
    description:
      "Digital services franchise providing websites, marketing, and business automation.",
    fullDescription:
      "Digital Solutions Pro helps businesses establish and grow their online presence through websites, digital marketing, automation, and technology consulting.",
    image: retailFranchise,
    roi: "30-40%",
    phone: "+1 (800) 555-0111",
    unitsOperating: 83,
    yearFounded: 2019,
    territories: "Remote and local markets",
    support: [
      "Technical training",
      "Sales training",
      "Marketing support",
      "Software platform",
      "Lead generation",
      "Business coaching",
    ],
    requirements: [
      "Minimum liquid capital: $60,000",
      "Net worth: $250,000",
      "Basic technology knowledge",
      "Entrepreneurial mindset",
    ],
  },

  {
    id: "smart-it-services",
    name: "Smart IT Services",
    category: "Technology",
    investment: "$120K - $280K",
    minInvestment: 120000,
    description:
      "Managed IT services franchise supporting businesses with reliable technology solutions.",
    fullDescription:
      "Smart IT Services provides managed technology, cloud infrastructure, cybersecurity, and technical support to businesses of all sizes.",
    image: retailFranchise,
    roi: "27-37%",
    phone: "+1 (800) 555-0112",
    unitsOperating: 59,
    yearFounded: 2020,
    territories: "Major cities and business districts",
    support: [
      "IT certification training",
      "Technical support",
      "Sales enablement",
      "Marketing resources",
      "Customer management platform",
      "Business development",
    ],
    requirements: [
      "Minimum liquid capital: $75,000",
      "Net worth: $300,000",
      "Technology background preferred",
      "Strong problem-solving skills",
    ],
  },

  // =========================================================
  // EDUCATION
  // =========================================================

  {
    id: "bright-minds-learning",
    name: "Bright Minds Learning",
    category: "Education",
    investment: "$150K - $300K",
    minInvestment: 150000,
    description:
      "Innovative tutoring and enrichment center using proven teaching methodologies.",
    fullDescription:
      "Bright Minds Learning has helped thousands of students achieve academic excellence through our proprietary curriculum and individualized approach.",
    image: educationFranchise,
    roi: "35-45%",
    phone: "+1 (800) 555-0113",
    unitsOperating: 98,
    yearFounded: 2014,
    territories: "Suburban communities nationwide",
    support: [
      "Proprietary curriculum and materials",
      "Teacher recruitment and certification",
      "Student assessment tools",
      "Parent communication systems",
      "Digital learning platform",
      "Territory marketing strategies",
    ],
    requirements: [
      "Minimum liquid capital: $75,000",
      "Net worth: $300,000",
      "Education background helpful",
      "Passion for student success",
    ],
  },

  {
    id: "future-scholars",
    name: "Future Scholars",
    category: "Education",
    investment: "$100K - $220K",
    minInvestment: 100000,
    description:
      "After-school learning center focused on academic development and student confidence.",
    fullDescription:
      "Future Scholars provides tutoring, test preparation, and enrichment programs for school-age children. Franchise owners receive curriculum, training, and ongoing academic support.",
    image: educationFranchise,
    roi: "32-42%",
    phone: "+1 (800) 555-0114",
    unitsOperating: 81,
    yearFounded: 2016,
    territories: "Schools and suburban communities",
    support: [
      "Curriculum licensing",
      "Teacher training",
      "Center setup",
      "Marketing support",
      "Student management software",
      "Academic consulting",
    ],
    requirements: [
      "Minimum liquid capital: $60,000",
      "Net worth: $250,000",
      "Education experience preferred",
      "Strong communication skills",
    ],
  },

  {
    id: "skillbridge-academy",
    name: "SkillBridge Academy",
    category: "Education",
    investment: "$180K - $350K",
    minInvestment: 180000,
    description:
      "Career-focused training academy providing practical skills for students and professionals.",
    fullDescription:
      "SkillBridge Academy offers professional training programs in technology, business, and career development. The franchise model combines physical learning centers with online education.",
    image: educationFranchise,
    roi: "30-40%",
    phone: "+1 (800) 555-0115",
    unitsOperating: 63,
    yearFounded: 2018,
    territories: "Urban and educational hubs",
    support: [
      "Course content",
      "Instructor training",
      "Learning management system",
      "Digital marketing",
      "Student acquisition support",
      "Operational guidance",
    ],
    requirements: [
      "Minimum liquid capital: $100,000",
      "Net worth: $400,000",
      "Training or education experience helpful",
      "Interest in professional development",
    ],
  },

  // =========================================================
  // AUTOMOTIVE
  // =========================================================

  {
    id: "auto-care-plus",
    name: "Auto Care Plus",
    category: "Automotive Services",
    investment: "$500K - $900K",
    minInvestment: 500000,
    description:
      "Full-service automotive care center with transparent pricing and quality guarantee.",
    fullDescription:
      "Auto Care Plus has revolutionized the automotive service industry with our commitment to transparency, quality, and customer satisfaction.",
    image: automotiveFranchise,
    roi: "32-42%",
    phone: "+1 (800) 555-0116",
    unitsOperating: 87,
    yearFounded: 2013,
    territories: "High-traffic locations nationwide",
    support: [
      "Facility design and equipment",
      "Technician training and certification",
      "Diagnostic software and tools",
      "Customer management system",
      "Parts supplier relationships",
      "Quality assurance programs",
    ],
    requirements: [
      "Minimum liquid capital: $300,000",
      "Net worth: $1,200,000",
      "Automotive industry experience preferred",
      "Strong business acumen",
    ],
  },

  {
    id: "drive-safe-auto",
    name: "DriveSafe Auto",
    category: "Automotive Services",
    investment: "$250K - $500K",
    minInvestment: 250000,
    description:
      "Trusted automotive maintenance franchise focused on reliable and affordable vehicle care.",
    fullDescription:
      "DriveSafe Auto provides routine maintenance, inspections, repairs, and vehicle care services. Its streamlined service model helps franchise owners maintain consistent quality and customer satisfaction.",
    image: automotiveFranchise,
    roi: "29-39%",
    phone: "+1 (800) 555-0117",
    unitsOperating: 71,
    yearFounded: 2016,
    territories: "Urban and suburban markets",
    support: [
      "Workshop setup",
      "Technician training",
      "Equipment procurement",
      "Marketing support",
      "Parts supplier network",
      "Operational consulting",
    ],
    requirements: [
      "Minimum liquid capital: $150,000",
      "Net worth: $600,000",
      "Automotive experience preferred",
      "Strong management skills",
    ],
  },

  {
    id: "quick-lube-express",
    name: "Quick Lube Express",
    category: "Automotive Services",
    investment: "$300K - $650K",
    minInvestment: 300000,
    description:
      "Fast automotive service franchise specializing in oil changes, maintenance, and inspections.",
    fullDescription:
      "Quick Lube Express specializes in convenient automotive maintenance services. Its efficient service model allows customers to get essential vehicle maintenance quickly while franchise owners benefit from streamlined operations.",
    image: automotiveFranchise,
    roi: "30-40%",
    phone: "+1 (800) 555-0118",
    unitsOperating: 64,
    yearFounded: 2017,
    territories: "High-traffic roadside locations",
    support: [
      "Site selection",
      "Facility design",
      "Technician training",
      "Equipment support",
      "Marketing campaigns",
      "Operations management",
    ],
    requirements: [
      "Minimum liquid capital: $180,000",
      "Net worth: $700,000",
      "Automotive experience helpful",
      "Strong operational skills",
    ],
  },
];

export default franchises;