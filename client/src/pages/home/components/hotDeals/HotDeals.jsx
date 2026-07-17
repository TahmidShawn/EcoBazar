import SectionTitle from "../../../../components/shared/sectionTitle/SectionTitle";
import img1 from "../../../../assets/deals/img1.png";
import img2 from "../../../../assets/deals/img2.png";
import img3 from "../../../../assets/deals/img3.png";
import img4 from "../../../../assets/deals/img4.png";
import img5 from "../../../../assets/deals/img5.png";
import img6 from "../../../../assets/deals/img6.png";
import img7 from "../../../../assets/deals/img7.png";

const products = [
    {
        id: 1,
        image: img1,
        name: "Chinese cabbage",
        price: "$12.00",
        featured: true,
    },
    { id: 2, image: img2, name: "Chinese cabbage", price: "$12.00" },
    { id: 3, image: img3, name: "Chinese cabbage", price: "$12.00" },
    { id: 4, image: img4, name: "Chinese cabbage", price: "$12.00" },
    { id: 5, image: img5, name: "Chinese cabbage", price: "$12.00" },
    { id: 6, image: img6, name: "Chinese cabbage", price: "$12.00" },
    { id: 7, image: img7, name: "Chinese cabbage", price: "$12.00" },
    { id: 8, image: img7, name: "Chinese cabbage", price: "$12.00" },
    { id: 9, image: img7, name: "Chinese cabbage", price: "$12.00" },
    { id: 10, image: img7, name: "Chinese cabbage", price: "$12.00" },
    { id: 11, image: img7, name: "Chinese cabbage", price: "$12.00" },
    { id: 12, image: img7, name: "Chinese cabbage", price: "$12.00" },
];

const HotDeals = () => {
    return (
        <div className="mt-20 bg-gray-200 py-16">
            <div className="wrapper mb-5">
                <SectionTitle
                    categoryName="Hot Deals"
                    categoryLink="/hot-deals"
                />
            </div>

            <div className="wrapper grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mx-auto lg:grid-cols-5 lg:grid-rows-3 lg:auto-rows-65">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`h-full w-full bg-white ${
                            product.featured
                                ? "lg:col-span-2 lg:row-span-2"
                                : ""
                        }`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="mx-auto w-3/4"
                        />

                        <div className="mb-4 -mt-1 px-4">
                            <h3 className="text-[#333]">{product.name}</h3>
                            <p className="my-1 text-xl font-bold">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotDeals;
