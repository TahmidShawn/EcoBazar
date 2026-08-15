import SidebarContent from "./SidebarContent";

const Sidebar = () => {
    return (
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
            <SidebarContent />
        </aside>
    );
};

export default Sidebar;
