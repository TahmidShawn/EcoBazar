import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import { useCategories } from "../../../hooks/useCategory";
import PopularCategory from "./PopularCategory";

const PopularCategories = () => {
    const { categories, loading } = useCategories();
    if (loading) {
        return (
            <div className="wrapper">
                <p className="text-center py-10">Loading categories...</p>
            </div>
        );
    }
    return (
        <div className="wrapper">
            {/* title section  */}
            <SectionTitle
                categoryName="Popular Categories"
                categoryLink="/popular-categories"
            />

            {/* contain section  */}
            <section className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
                {categories?.map((category) => (
                    <PopularCategory
                        key={category._id}
                        popularCategory={category}
                    ></PopularCategory>
                ))}
            </section>
        </div>
    );
};

export default PopularCategories;
