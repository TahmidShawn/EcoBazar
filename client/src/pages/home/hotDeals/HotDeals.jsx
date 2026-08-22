import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import { useProducts } from "../../../hooks/useProducts";

const HotDeals = () => {
    const { products, loading } = useProducts("?limit=12");

    return (
        <div className="mt-20 bg-gray-200 py-16">
            <div className="wrapper mb-5">
                <SectionTitle
                    categoryName="Hot Deals"
                    categoryLink="/hot-deals"
                />
            </div>

            <div className="wrapper grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mx-auto lg:grid-cols-5 lg:grid-rows-3 lg:auto-rows-65">
                {loading ? (
                    <p className="col-span-full text-center py-10">
                        Loading deals...
                    </p>
                ) : (
                    products?.map((product, index) => (
                        <div
                            key={product._id}
                            className={`h-full w-full bg-white ${
                                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                            }`}
                        >
                            <img
                                src={product.images?.[0]?.url}
                                alt={product.name}
                                className="mx-auto w-3/4"
                            />

                            <div className="mb-4 -mt-1 px-4">
                                <h3 className="text-[#333]">{product.name}</h3>
                                <p className="my-1 text-xl font-bold">
                                    ${product.discountPrice.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HotDeals;
