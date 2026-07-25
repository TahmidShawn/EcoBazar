import { Mail, MapPin, Phone } from "lucide-react";
import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";

const Contact = () => {
    return (
        <section>
            <BreadcrumbBanner
                items={[
                    {
                        label: "Contact",
                    },
                ]}
            />

            <div className=" mt-10">
                <div className="wrapper overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    <div className="grid lg:grid-cols-[300px_1fr]">
                        <div className="border-border bg-gray-50/70 p-6 sm:p-8 lg:border-r lg:p-10">
                            <div className="flex flex-col gap-8 sm:grid sm:grid-cols-3 lg:flex lg:flex-col lg:gap-10">
                                <div className="text-center">
                                    <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                                        <MapPin size={25} />
                                    </div>

                                    <h3 className="text-text mb-2 font-semibold">
                                        Our Address
                                    </h3>

                                    <p className="text-muted text-sm leading-6">
                                        2715 Ash Dr. San Jose,
                                        <br />
                                        South Dakota 83475
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                                        <Mail size={25} />
                                    </div>

                                    <h3 className="text-text mb-2 font-semibold">
                                        Email
                                    </h3>

                                    <p className="text-muted text-sm leading-6">
                                        support@ecobazar.com
                                        <br />
                                        hello@ecobazar.com
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                                        <Phone size={25} />
                                    </div>

                                    <h3 className="text-text mb-2 font-semibold">
                                        Phone
                                    </h3>

                                    <p className="text-muted text-sm leading-6">
                                        (+219) 555-0114
                                        <br />
                                        (+164) 333-0487
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                            <div className="max-w-3xl">
                                <h2 className="text-text mb-3 text-2xl font-semibold sm:text-3xl">
                                    Just Say Hello!
                                </h2>

                                <p className="text-muted mb-8 text-sm leading-6 sm:text-base">
                                    Do you have any questions or want to get
                                    started with your project? We'd love to hear
                                    from you. Fill out the form below and we'll
                                    get back to you as soon as possible.
                                </p>

                                {/* Form */}
                                <form className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="border-border focus:border-primary focus:ring-primary/10 h-12 w-full rounded-lg border px-4 text-sm outline-none transition focus:ring-4"
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="border-border focus:border-primary focus:ring-primary/10 h-12 w-full rounded-lg border px-4 text-sm outline-none transition focus:ring-4"
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="border-border focus:border-primary focus:ring-primary/10 h-12 w-full rounded-lg border px-4 text-sm outline-none transition focus:ring-4"
                                    />

                                    <textarea
                                        rows={5}
                                        placeholder="Write your message..."
                                        className="border-border focus:border-primary focus:ring-primary/10 w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-4"
                                    />

                                    <button
                                        type="submit"
                                        className="bg-primary hover:bg-secondary rounded-full px-7 py-3 text-sm font-medium text-white transition"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className=" mt-10 sm:mt-14">
                <div className=" border border-border shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0184645946847!2d-121.88632268468204!3d37.33680597984266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d59e662f166ee!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        className="block h-70 w-full sm:h-85 lg:h-100"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
