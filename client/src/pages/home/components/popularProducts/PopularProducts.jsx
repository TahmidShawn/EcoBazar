import { Eye, Heart } from "lucide-react";
import SectionTitle from "../../../../components/shared/sectionTitle/SectionTitle";
import img from "./../../../../assets/popularProducts/Image.png";

import { Link } from "react-router";

const PopularProducts = () => {
    return (
        <div className="my-6 wrapper">
            {/* title section  */}
            <SectionTitle
                categoryName="Popular Products"
                categoryLink="/popular-products"
            />
            {/* contain section  */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4">
                {/* card  */}
                <div className="border border-gray-200 shadow text-center hover:border-primary hover:shadow-2xl p-2 relative group">
                    <img src={img} alt="" className="mx-auto" />

                    <div className="text-left ml-2">
                        <p>Green Apple</p>
                        <h2 className="text-xl font-bold my-1">$ 14.00</h2>

                        <div className="absolute top-0 right-0 mr-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link>
                                <div className="p-1.5  rounded-full bg-white">
                                    <Heart />
                                </div>
                            </Link>

                            <Link>
                                <div className="p-1.5  rounded-full bg-white ">
                                    <Eye />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularProducts;
