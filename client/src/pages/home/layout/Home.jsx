import Newsletter from "../../../components/shared/newsletter/Newsletter";
import Banner from "../components/banner/Banner";
import DiscountBanner from "../components/discountBanner/DiscountBanner";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";
import Features from "../components/features/Features";
import HotDeals from "../components/hotDeals/HotDeals";
import LatestNews from "../components/latestNews/LatestNews";
import OfferBanner from "../components/offerBanner/OfferBanner";

import PopularCategories from "../components/popularCategories/PopularCategories";
import PopularProducts from "../components/popularProducts/PopularProducts";
import Testimonials from "../components/testimonials/Testimonials";

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
            <Newsletter />
        </div>
    );
};

export default Home;
