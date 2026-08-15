import {
    ArrowUpRight,
    CreditCard,
    Package,
    ShoppingCart,
    TrendingUp,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const stats = [
    {
        title: "Total Revenue",
        value: "$24,580",
        change: "+12.5%",
        icon: CreditCard,
    },
    {
        title: "Orders",
        value: "1,248",
        change: "+8.2%",
        icon: ShoppingCart,
    },
    {
        title: "Customers",
        value: "8,490",
        change: "+5.7%",
        icon: Users,
    },
    {
        title: "Products",
        value: "2,345",
        change: "+3.1%",
        icon: Package,
    },
];

const recentOrders = [
    {
        id: "#1024",
        customer: "James Wilson",
        product: "Green Tea Set",
        total: "$84.00",
        status: "Paid",
    },
    {
        id: "#1025",
        customer: "Sophia Lee",
        product: "Organic Basket",
        total: "$126.00",
        status: "Shipped",
    },
    {
        id: "#1026",
        customer: "Daniel Green",
        product: "Herbal Oils",
        total: "$58.00",
        status: "Pending",
    },
    {
        id: "#1027",
        customer: "Mia Harris",
        product: "Smart Garden Kit",
        total: "$240.00",
        status: "Paid",
    },
];

const topCategories = [
    { name: "Home & Living", sales: "$8.4k", progress: "72%" },
    { name: "Beauty & Care", sales: "$6.2k", progress: "58%" },
    { name: "Groceries", sales: "$5.1k", progress: "49%" },
    { name: "Accessories", sales: "$3.8k", progress: "41%" },
];

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">Overview</p>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Admin Dashboard
                    </h1>
                </div>
                <Button className="w-fit rounded-xl">Download report</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ title, value, change, icon: Icon }) => (
                    <Card
                        key={title}
                        className="border-slate-200 bg-white shadow-sm"
                    >
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-600">
                                {title}
                            </CardTitle>
                            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                <Icon className="h-4 w-4" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{value}</div>
                            <p className="mt-2 flex items-center gap-1 text-sm text-emerald-600">
                                <TrendingUp className="h-3.5 w-3.5" />
                                {change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
                <Card className="border-slate-200 bg-white shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div>
                            <CardTitle>Sales overview</CardTitle>
                            <CardDescription>
                                Performance this month
                            </CardDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1 text-primary"
                        >
                            View details
                            <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="mt-4 flex h-56 items-end gap-3 rounded-2xl bg-slate-50 p-4">
                            {[42, 58, 36, 72, 66, 88, 76].map(
                                (height, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-1 flex-col items-center gap-2"
                                    >
                                        <div
                                            className="w-full rounded-t-xl bg-linear-to-t from-primary to-primary/50"
                                            style={{ height: `${height}%` }}
                                        />
                                        <span className="text-xs text-slate-400">
                                            {"JFMAMJS"[index]}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 bg-white shadow-sm">
                    <CardHeader>
                        <CardTitle>Top categories</CardTitle>
                        <CardDescription>Best-selling segments</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {topCategories.map(({ name, sales, progress }) => (
                            <div key={name} className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium text-slate-700">
                                        {name}
                                    </span>
                                    <span className="text-slate-500">
                                        {sales}
                                    </span>
                                </div>
                                <div className="h-2.5 rounded-full bg-slate-100">
                                    <div
                                        className="h-2.5 rounded-full bg-primary"
                                        style={{ width: progress }}
                                    />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <Card className="border-slate-200 bg-white shadow-sm">
                <CardHeader>
                    <CardTitle>Recent orders</CardTitle>
                    <CardDescription>Latest customer purchases</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 text-slate-500">
                                    <th className="pb-3 font-medium">Order</th>
                                    <th className="pb-3 font-medium">
                                        Customer
                                    </th>
                                    <th className="pb-3 font-medium">
                                        Product
                                    </th>
                                    <th className="pb-3 font-medium">Total</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map(
                                    ({
                                        id,
                                        customer,
                                        product,
                                        total,
                                        status,
                                    }) => (
                                        <tr
                                            key={id}
                                            className="border-b border-slate-100 last:border-0"
                                        >
                                            <td className="py-3 font-medium text-slate-700">
                                                {id}
                                            </td>
                                            <td className="py-3 text-slate-600">
                                                {customer}
                                            </td>
                                            <td className="py-3 text-slate-600">
                                                {product}
                                            </td>
                                            <td className="py-3 text-slate-700">
                                                {total}
                                            </td>
                                            <td className="py-3">
                                                <span
                                                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                                                        status === "Paid"
                                                            ? "bg-emerald-100 text-emerald-700"
                                                            : status ===
                                                                "Shipped"
                                                              ? "bg-blue-100 text-blue-700"
                                                              : "bg-amber-100 text-amber-700"
                                                    }`}
                                                >
                                                    {status}
                                                </span>
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminDashboard;
