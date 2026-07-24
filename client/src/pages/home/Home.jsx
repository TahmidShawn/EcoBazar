import Banner from "./banner/Banner";
import DiscountBanner from "./discountBanner/DiscountBanner";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Features from "./features/Features";
import HotDeals from "./hotDeals/HotDeals";
import LatestNews from "./latestNews/LatestNews";
import OfferBanner from "./offerBanner/OfferBanner";
import PopularCategories from "./popularCategories/PopularCategories";

import PopularProducts from "./popularProducts/PopularProducts";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <PopularCategories />
            <PopularProducts />
            <OfferBanner />
            <HotDeals />
            <DiscountBanner />
            <FeaturedProducts />
            <LatestNews />
            <Testimonials />
        </div>
    );
};

export default Home;
