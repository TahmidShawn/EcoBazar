import { Eye, Heart } from "lucide-react";
import { Link } from "react-router";
import Ratings from "../../ui/Ratings";

const ProductCard = ({ product }) => {
    const { image, name, price, rating } = product;

    return (
        <div className="group relative border border-gray-200 p-2 text-center shadow transition-all hover:border-primary hover:shadow-xl">
            <img src={image} alt={name} className="mx-auto" />

            <div className="ml-2 text-left">
                <p className="text-sm">{name}</p>

                <h2 className="my-1 text-xl font-semibold py-1">
                    ${price.toFixed(2)}
                </h2>

                <Ratings rating={rating} />
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

export default ProductCard;
