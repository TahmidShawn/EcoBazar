import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <BreadcrumbBanner
                items={[
                    {
                        label: "Create Account",
                    },
                ]}
            />
            <main className="flex justify-center bg-white px-4 mt-12">
                <div className="w-full max-w-md rounded-lg border border-border bg-white  shadow-sm p-6 md:p-8">
                    <h1 className="text-text mb-7 text-center text-3xl font-semibold">
                        Create Account
                    </h1>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="text"
                                placeholder="Enter your name"
                                required
                                className="border-border text-text placeholder:text-muted focus:border-primary w-full rounded-md border bg-white px-3 py-3 text-sm outline-none transition"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="border-border text-text placeholder:text-muted focus:border-primary w-full rounded-md border bg-white px-3 py-3 text-sm outline-none transition"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                required
                                className="border-border text-text placeholder:text-muted focus:border-primary w-full rounded-md border bg-white px-3 py-3 pr-11 text-sm outline-none transition"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-muted hover:text-text absolute top-1/2 right-3 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        <label className="flex cursor-pointer items-center gap-2 pt-1">
                            <input
                                type="checkbox"
                                required
                                className="accent-primary h-4 w-4 cursor-pointer"
                            />

                            <span className="text-muted text-sm">
                                Accept all terms & Conditions
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 mt-3 w-full rounded-full px-4 py-3 text-sm font-semibold text-white transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-muted mt-6 text-center text-sm">
                        Already have account
                        <button
                            type="button"
                            className="text-primary font-medium hover:underline ml-2 text-base"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Register;
