import { Mail } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="mt-16 bg-gray-200 py-12">
            <div className="wrapper flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-semibold text-text">
                        Subscribe to Our Newsletter
                    </h2>

                    <p className="mt-3 text-muted text-sm">
                        Subscribe to get the latest updates, fresh arrivals, and
                        exclusive offers delivered straight to your inbox.
                    </p>
                </div>

                <form className="flex w-full lg:max-w-lg">
                    <div className="relative flex-1">
                        <Mail
                            size={20}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                        />

                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full rounded-l-md border bg-white border-border py-2.5 pl-10 pr-4 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-r-md bg-primary px-6 font-medium text-white"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
