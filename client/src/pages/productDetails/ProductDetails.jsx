import { useState } from "react";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

import product1 from "../../assets/deals/img1.png";
import product2 from "../../assets/deals/img2.png";
import product3 from "../../assets/deals/img3.png";
import product4 from "../../assets/deals/img4.png";
import product5 from "../../assets/deals/img5.png";

const product = {
    id: 1,

    name: "Chinese Cabbage",

    price: 48,

    oldPrice: 64,

    rating: 4.8,

    reviewCount: 24,

    sku: "VEG-001",

    category: "Vegetables",

    brand: "EcoBazar",

    stock: "In Stock",

    tags: ["Vegetable", "Healthy", "Organic"],

    description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",

    additionalInfo: {
        Weight: "1kg",
        Color: "Green",
        Freshness: "100% Organic",
        Delivery: "1-2 Days",
    },

    images: [product1, product2, product3, product4, product5],

    reviews: [
        {
            id: 1,
            name: "John Doe",
            rating: 5,
            comment: "Amazing quality. Very fresh vegetables.",
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            comment: "Good packaging and fast delivery.",
        },
    ],
};

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <section className="wrapper py-12">
            <div className="grid gap-14 lg:grid-cols-2">
                <ProductGallery
                    images={product.images}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />

                <ProductInfo product={product} />
            </div>

            <ProductTabs product={product} />
        </section>
    );
};

export default ProductDetails;
