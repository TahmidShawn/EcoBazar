import wishListImg from "../../assets/banner/Breadcrumbs.png";
import Breadcrumb from "../../components/ui/Breadcrumb";

const WishList = () => {
    return (
        <div className="w-full h-24 relative">
            <img
                src={wishListImg}
                alt=""
                className="object-cover h-full w-full"
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full">
                <Breadcrumb
                    items={[
                        {
                            label: "Wishlist",
                            href: "/wishlist",
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default WishList;
