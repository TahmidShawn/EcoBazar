import wishListImg from "../../../assets/banner/Breadcrumbs.png";
import Breadcrumb from "../../ui/Breadcrumb";

const BreadcrumbBanner = ({ items }) => {
    return (
        <div className="relative h-24 w-full">
            <img
                src={wishListImg}
                alt=""
                className="h-full w-full object-cover"
            />

            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                <Breadcrumb items={items} />
            </div>
        </div>
    );
};

export default BreadcrumbBanner;
