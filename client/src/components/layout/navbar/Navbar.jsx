import MainHeader from "./MainHeader/MainHeader";
import MenuBar from "./MenuBar.jsx/MenuBar";
import TopBar from "./TopBar/TopBar";

const Navbar = () => {
    return (
        <div>
            <TopBar />
            <MainHeader />
            <MenuBar />
        </div>
    );
};

export default Navbar;
