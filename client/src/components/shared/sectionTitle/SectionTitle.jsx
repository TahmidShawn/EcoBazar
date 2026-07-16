import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const SectionTitle = ({ categoryName, categoryLink }) => {
    return (
        <div className="flex justify-between items-center mx-4 lg:mx-0">
            <h1 className="text-2xl font-semibold">{categoryName}</h1>

            <Link
                to={categoryLink}
                className="text-primary flex justify-center items-center gap-2"
            >
                View All
                <ArrowRight />
            </Link>
        </div>
    );
};

export default SectionTitle;
