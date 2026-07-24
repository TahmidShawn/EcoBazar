import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";
import img1 from "../../assets/about/about1.png";

import {
    Leaf,
    ShieldCheck,
    Truck,
    Headphones,
    RefreshCw,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";

const About = () => {
    return (
        <div>
            <BreadcrumbBanner
                items={[
                    {
                        label: "About",
                    },
                ]}
            />

            <section className="wrapper space-y-28 py-20">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <p className="text-primary mb-3 font-semibold uppercase tracking-widest">
                            About Us
                        </p>

                        <h2 className="text-text mb-6 text-4xl leading-tight font-semibold">
                            100% Trusted <br /> Organic Food Store
                        </h2>

                        <p className="text-muted mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit repellendus omnis quos, atque fugiat
                            dignissimos.
                        </p>

                        <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur, voluptatibus molestiae.
                            Distinctio expedita neque doloremque.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
                        <img
                            src={img1}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={img1}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-primary mb-3 font-semibold uppercase tracking-widest">
                            Why Choose Us
                        </p>

                        <h2 className="text-text mb-5 text-4xl font-semibold">
                            Fresh Organic Products Every Day
                        </h2>

                        <p className="text-muted mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam dolore laboriosam nemo quia unde
                            autem.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <Leaf className="text-primary" />

                                <div>
                                    <h4 className="font-semibold">
                                        Organic Food
                                    </h4>

                                    <p className="text-muted text-sm">
                                        Fresh & healthy products.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Headphones className="text-primary" />

                                <div>
                                    <h4 className="font-semibold">
                                        24/7 Support
                                    </h4>

                                    <p className="text-muted text-sm">
                                        Always here to help.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-primary" />

                                <div>
                                    <h4 className="font-semibold">
                                        Secure Payment
                                    </h4>

                                    <p className="text-muted text-sm">
                                        Safe checkout process.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Truck className="text-primary" />

                                <div>
                                    <h4 className="font-semibold">
                                        Free Delivery
                                    </h4>

                                    <p className="text-muted text-sm">
                                        Fast shipping service.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <RefreshCw className="text-primary" />

                                <div>
                                    <h4 className="font-semibold">
                                        Easy Return
                                    </h4>

                                    <p className="text-muted text-sm">
                                        Hassle free returns.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <BadgeCheck className="text-primary" />

                                <div>
                                    <h4 className="font-semibold">
                                        Premium Quality
                                    </h4>

                                    <p className="text-muted text-sm">
                                        Carefully selected items.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <p className="text-primary mb-3 font-semibold uppercase tracking-widest">
                            Fast Delivery
                        </p>

                        <h2 className="text-text mb-5 text-4xl leading-tight font-semibold">
                            We Delivered, <br /> You Enjoy Your Order.
                        </h2>

                        <p className="text-muted mb-8 max-w-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi laborum asperiores molestiae, cupiditate
                            minima nemo corporis rerum voluptatem.
                        </p>

                        <button className="bg-primary  flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white transition">
                            Shop Now
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                        <img
                            src={img1}
                            alt=""
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
