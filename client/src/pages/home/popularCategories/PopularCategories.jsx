import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import { popularCategories } from "../../../data/data";
import PopularCategory from "./PopularCategory";

const PopularCategories = () => {
    return (
        <div className="wrapper">
            {/* title section  */}
            <SectionTitle
                categoryName="Popular Categories"
                categoryLink="/popular-categories"
            />

            {/* contain section  */}
            <section className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
                {popularCategories?.map((popularCategory) => (
                    <PopularCategory
                        key={popularCategory.id}
                        popularCategory={popularCategory}
                    ></PopularCategory>
                ))}
            </section>
        </div>
    );
};

export default PopularCategories;
