import { Eye, Heart, Star } from "lucide-react";
import { Link } from "react-router";

const PopularProductCard = ({ product }) => {
    const { image, name, price, rating } = product;
    console.log("render", product.name);

    return (
        <div className="group relative border border-gray-200 p-2 text-center shadow transition-all hover:border-primary hover:shadow-xl">
            <img src={image} alt={name} className="mx-auto" />

            <div className="ml-2 text-left">
                <p className="text-sm">{name}</p>

                <h2 className="my-1 text-xl font-semibold py-1">
                    ${price.toFixed(2)}
                </h2>

                <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={16}
                            fill={star <= rating ? "#ff8a00" : "none"}
                            stroke={star <= rating ? "#ff8a00" : "#d1d5db"}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute top-2 right-2 space-y-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link>
                    <div className="rounded-full bg-white group-hover:bg-gray-200 p-1.5 shadow">
                        <Heart size={18} />
                    </div>
                </Link>

                <Link>
                    <div className="rounded-full bg-white group-hover:bg-gray-200 p-1.5 shadow mt-1.5">
                        <Eye size={18} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default PopularProductCard;
