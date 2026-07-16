import Banner from "./components/banner/Banner";
import Features from "./components/Features/Features";
import PopularCategories from "./components/popularCategories/popularCategories";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <PopularCategories />
        </div>
    );
};

export default Home;
