import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SidebarContent from "../sidebar/SidebarContent";

const DashboardHeader = () => {
    return (
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
                <Sheet>
                    <SheetTrigger
                        render={
                            <Button
                                variant="outline"
                                size="icon"
                                className="lg:hidden"
                            />
                        }
                    >
                        <Menu className="h-5 w-5" />
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="flex w-72 flex-col p-0"
                    >
                        <SidebarContent />
                    </SheetContent>
                </Sheet>

                <div>
                    <p className="text-sm text-slate-500">Dashboard</p>
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        Welcome back, Admin
                    </h2>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 sm:block">
                    Today: Aug 14, 2026
                </div>
                <Button className="rounded-xl">
                    <span className="hidden sm:inline">New report</span>
                    <span className="sm:hidden">New</span>
                </Button>
            </div>
        </header>
    );
};

export default DashboardHeader;
