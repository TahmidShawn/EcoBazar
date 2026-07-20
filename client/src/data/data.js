// import
import img1 from "../assets/popularCategories/img-1.png";
import img2 from "../assets/popularCategories/img-2.png";
import img3 from "../assets/popularCategories/img-3.png";
import img4 from "../assets/popularCategories/img-4.png";
import img5 from "../assets/popularCategories/img-5.png";
import img6 from "../assets/popularCategories/img-6.png";
import img7 from "../assets/popularCategories/img-7.png";
import img8 from "../assets/popularCategories/img-8.png";
import img9 from "../assets/popularCategories/img-9.png";
import img10 from "../assets/popularCategories/img-10.png";
import img11 from "../assets/popularCategories/img-11.png";
import img12 from "../assets/popularCategories/img-12.png";

import feature1 from "../assets/feature/delivery-truck.png";
import feature2 from "../assets/feature/headphones.png";
import feature3 from "../assets/feature/package.png";
import feature4 from "../assets/feature/shopping-bag.png";

import product1 from "../assets/popularProducts/Image.png";

// export
export const languageOptions = [
    { label: "English", value: "en" },
    { label: "Bangla", value: "bn" },
];

export const currencyOptions = [
    { label: "USD", value: "usd" },
    { label: "BDT", value: "bdt" },
];

export const featuresData = [
    {
        id: 1,
        image: feature1,
        title: "Free Shipping",
        description: "Free shipping on all your orders",
    },
    {
        id: 2,
        image: feature2,
        title: "Customer Support 24/7",
        description: "Instant access to Support",
    },
    {
        id: 3,
        image: feature3,
        title: "100% Secure Payment",
        description: "We ensure your money is safe",
    },
    {
        id: 4,
        image: feature4,
        title: "Money-Back Guarantee",
        description: "30 Days Money-Back Guarantee",
    },
];

export const popularCategories = [
    {
        id: 1,
        name: "Fresh Fruit",
        image: img1,
    },
    {
        id: 2,
        name: "Fresh Vegetables",
        image: img2,
    },
    {
        id: 3,
        name: "Meat & Fish",
        image: img3,
    },
    {
        id: 4,
        name: "Snacks",
        image: img4,
    },
    {
        id: 5,
        name: "Beverages",
        image: img5,
    },
    {
        id: 6,
        name: "Beauty & Health",
        image: img6,
    },
    {
        id: 7,
        name: "Bread & Bakery",
        image: img7,
    },
    {
        id: 8,
        name: "Baking Needs",
        image: img8,
    },
    {
        id: 9,
        name: "Cooking",
        image: img9,
    },
    {
        id: 10,
        name: "Diabetic Food",
        image: img10,
    },
    {
        id: 11,
        name: "Dish Detergents",
        image: img11,
    },
    {
        id: 12,
        name: "Oil",
        image: img12,
    },
];

export const popularProducts = [
    {
        id: 1,
        name: "Green Apple",
        price: 14,
        image: product1,
        rating: 4,
    },
    {
        id: 2,
        name: "Fresh Orange",
        price: 20,
        image: product1,
        rating: 5,
    },
    {
        id: 3,
        name: "Red Tomato",
        price: 10,
        image: product1,
        rating: 3,
    },
    {
        id: 4,
        name: "Green Cabbage",
        price: 12,
        image: product1,
        rating: 4,
    },
    {
        id: 5,
        name: "Potato",
        price: 8,
        image: product1,
        rating: 5,
    },
];
export const featuredProducts = [
    {
        id: 1,
        name: "Green Apple",
        price: 14,
        image: product1,
        rating: 4,
    },
    {
        id: 2,
        name: "Fresh Orange",
        price: 20,
        image: product1,
        rating: 5,
    },
    {
        id: 3,
        name: "Red Tomato",
        price: 10,
        image: product1,
        rating: 3,
    },
    {
        id: 4,
        name: "Green Cabbage",
        price: 12,
        image: product1,
        rating: 4,
    },
    {
        id: 5,
        name: "Potato",
        price: 8,
        image: product1,
        rating: 5,
    },
];

// Filter data

export const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "vegetables", label: "Vegetables" },
    { value: "fruits", label: "Fresh Fruits" },
    { value: "fish", label: "Fish" },
    { value: "meat", label: "Meat" },
];

export const priceOptions = [
    { value: "all", label: "Price" },
    { value: "low-high", label: "Low to High" },
    { value: "high-low", label: "High to Low" },
    { value: "under-20", label: "Under $20" },
    { value: "over-20", label: "Over $20" },
];

export const ratingOptions = [
    { value: "all", label: "Rating" },
    { value: "5", label: "5 Stars" },
    { value: "4", label: "4 Stars & Up" },
    { value: "3", label: "3 Stars & Up" },
];

export const latestOptions = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
];

export const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "popular", label: "Popular" },
    { value: "best-selling", label: "Best Selling" },
    { value: "a-z", label: "A-Z" },
    { value: "z-a", label: "Z-A" },
];
