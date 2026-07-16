import Banner from "./components/banner/Banner";
import Features from "./components/features-temp/Features";

import PopularCategories from "./components/popularCategories/PopularCategories";
import PopularProducts from "./components/popularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <PopularCategories />
            <PopularProducts />
        </div>
    );
};

export default Home;
