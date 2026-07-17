import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import OfferBanner from "./components/offerBanner/OfferBanner";

import PopularCategories from "./components/popularCategories/PopularCategories";
import PopularProducts from "./components/popularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <PopularCategories />
            <PopularProducts />
            <OfferBanner />
        </div>
    );
};

export default Home;
