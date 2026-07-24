import { Mail, MapPin, Phone } from "lucide-react";
import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";

const Contact = () => {
    return (
        <section className=" ">
            <BreadcrumbBanner
                items={[
                    {
                        label: "Contact",
                    },
                ]}
            />
            <div className="wrapper overflow-hidden rounded-2xl border border-border bg-white shadow-sm mt-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="border-border flex w-full flex-col justify-center border-b p-10 lg:w-80 lg:border-r lg:border-b-0">
                        <div className="space-y-10">
                            <div className="text-center">
                                <div className="bg-primary/10 text-primary mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                                    <MapPin size={28} />
                                </div>

                                <h3 className="text-text mb-2 font-semibold">
                                    Our Address
                                </h3>

                                <p className="text-muted">
                                    2715 Ash Dr. San Jose,
                                </p>

                                <p className="text-muted">South Dakota 83475</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-primary/10 text-primary mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                                    <Mail size={28} />
                                </div>

                                <h3 className="text-text mb-2 font-semibold">
                                    Email
                                </h3>

                                <p className="text-muted">
                                    support@ecobazar.com
                                </p>

                                <p className="text-muted">hello@ecobazar.com</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-primary/10 text-primary mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                                    <Phone size={28} />
                                </div>

                                <h3 className="text-text mb-2 font-semibold">
                                    Phone
                                </h3>

                                <p className="text-muted">(+219) 555-0114</p>

                                <p className="text-muted">(+164) 333-0487</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-10">
                        <h2 className="text-text mb-3 text-3xl font-semibold">
                            Just Say Hello!
                        </h2>

                        <p className="text-muted mb-8 max-w-2xl">
                            Do you have any questions or want to get started
                            with your project? We'd love to hear from you. Fill
                            out the form below and we'll get back to you as soon
                            as possible.
                        </p>

                        {/* Form  */}
                        <div className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border-border focus:border-primary rounded-lg border px-4 py-3 outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border-border focus:border-primary rounded-lg border px-4 py-3 outline-none"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="border-border focus:border-primary w-full rounded-lg border px-4 py-3 outline-none"
                            />

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="border-border focus:border-primary w-full resize-none rounded-lg border px-4 py-3 outline-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-primary rounded-full px-8 py-3 font-medium text-white transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* MAP  */}
            <div className="mt-14 ">
                <div className=" border border-border shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0184645946847!2d-121.88632268468204!3d37.33680597984266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d59e662f166ee!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
