import { ProductData } from "@/types/product"

export const products: ProductData[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 39.99,
    category: "Apparel",
    color: "Forest Green",
    image: "/products/t-shirt.webp",
    description: "Crafted from 100% organic cotton, this premium t-shirt offers unparalleled comfort and durability. The breathable fabric ensures all-day freshness, while the tailored fit provides a sleek silhouette. Perfect for both casual outings and light physical activities.",
    features: [
      "100% organic cotton for eco-conscious comfort",
      "Reinforced seams for extended longevity",
      "Available in sizes S to XXL",
      "Machine washable for easy care"
    ]
  },
  {
    id: 2,
    name: "Artisan Leather Bifold Wallet",
    price: 79.99,
    category: "Accessories",
    color: "Cognac Brown",
    image: "/products/leather_wallet.webp",
    description: "Handcrafted by skilled artisans, this genuine leather wallet combines functionality with timeless elegance. The full-grain leather develops a unique patina over time, making each piece truly one-of-a-kind. Designed to organize your essentials with style and efficiency.",
    features: [
      "Full-grain leather sourced from sustainable tanneries",
      "RFID blocking technology for enhanced security",
      "8 card slots, 2 hidden pockets, and a coin compartment",
      "Dimensions: 4.5\" x 3.5\" when folded"
    ]
  },
  {
    id: 3,
    name: "UltraGlide Performance Running Shoes",
    price: 129.99,
    category: "Footwear",
    color: "Electric Blue",
    image: "/products/shoes.webp",
    description: "Experience unparalleled comfort and performance with our UltraGlide running shoes. Featuring advanced cushioning technology and a responsive midsole, these shoes are designed to enhance your running experience, whether you're a seasoned marathoner or a casual jogger.",
    features: [
      "Proprietary CloudFoam midsole for optimal energy return",
      "Breathable mesh upper with supportive overlays",
      "Durable rubber outsole with multi-directional traction",
      "Reflective details for enhanced visibility in low-light conditions"
    ]
  },
  {
    id: 4,
    name: "SoundSphere True Wireless Earbuds",
    price: 149.99,
    category: "Electronics",
    color: "Pearl White",
    image: "/products/airpods.webp",
    description: "Immerse yourself in crystal-clear audio with our SoundSphere wireless earbuds. Featuring advanced noise-cancellation technology and high-fidelity drivers, these earbuds deliver an exceptional listening experience. The ergonomic design ensures a comfortable fit for extended use.",
    features: [
      "Active Noise Cancellation (ANC) for immersive listening",
      "Bluetooth 5.2 for stable, long-range connectivity",
      "IPX5 water-resistant for worry-free workouts",
      "Up to 30 hours of total playtime with the charging case"
    ]
  },
  {
    id: 5,
    name: "Heritage Denim Slim-Fit Jeans",
    price: 89.99,
    category: "Apparel",
    color: "Indigo Wash",
    image: "/products/denim_jeans.jpg",
    description: "Our Heritage Denim jeans combine classic style with modern comfort. Crafted from premium denim with a touch of stretch, these jeans offer both durability and flexibility. The slim-fit design flatters your silhouette while providing all-day comfort.",
    features: [
      "98% cotton, 2% elastane for the perfect stretch",
      "Five-pocket styling with reinforced stress points",
      "Ethically manufactured with eco-friendly processes",
      "Available in waist sizes 28\" to 40\" and lengths 30\" to 34\""
    ]
  },
  {
    id: 6,
    name: "TechPro Fitness Smartwatch",
    price: 229.99,
    category: "Electronics",
    color: "Midnight Black",
    image: "/products/smartwatch.webp",
    description: "Stay connected and achieve your fitness goals with the TechPro Fitness Smartwatch. This advanced wearable device combines comprehensive health tracking features with smart notifications, allowing you to monitor your well-being and stay updated on the go.",
    features: [
      "1.4\" AMOLED display with Always-On functionality",
      "Built-in GPS and 24/7 heart rate monitoring",
      "Over 100 sport modes for accurate workout tracking",
      "5 ATM water resistance for swimming and water sports"
    ]
  },
];