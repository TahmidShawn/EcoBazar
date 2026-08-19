import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const { handleRegister, loading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const result = await handleRegister(form);

        if (result) {
            navigate("/");
        }
    }

    return (
        <div>
            <BreadcrumbBanner
                items={[
                    {
                        label: "Create Account",
                    },
                ]}
            />

            <main className="mt-12 flex justify-center bg-white px-4">
                <div className="w-full max-w-md rounded-lg border border-border bg-white p-6 shadow-sm md:p-8">
                    <h1 className="text-text mb-7 text-center text-3xl font-semibold">
                        Create Account
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="username"
                                value={form.username}
                                placeholder="Enter your name"
                                className="border-border text-text placeholder:text-muted focus:border-primary w-full rounded-md border bg-white px-3 py-3 text-sm outline-none transition"
                            />
                        </div>

                        <div>
                            <input
                                onChange={handleChange}
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder="Enter your email"
                                className="border-border text-text placeholder:text-muted focus:border-primary w-full rounded-md border bg-white px-3 py-3 text-sm outline-none transition"
                            />
                        </div>

                        <div className="relative">
                            <input
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                placeholder="Password"
                                autoComplete="current-password"
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

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary hover:bg-primary/90 mt-3 w-full rounded-full px-4 py-3 text-sm font-semibold text-white transition disabled:opacity-60"
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-3">
                        <div className="bg-border h-px flex-1" />

                        <span className="text-muted text-sm">or</span>

                        <div className="bg-border h-px flex-1" />
                    </div>

                    <button
                        type="button"
                        className="border-border text-text flex w-full items-center justify-center gap-3 rounded-full border bg-white px-4 py-3 text-sm font-medium transition hover:bg-gray-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
                            />

                            <path
                                fill="#FF3D00"
                                d="M6.3 14.7l6.6 4.8C14.7 16.2 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
                            />

                            <path
                                fill="#4CAF50"
                                d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.1-5.2C29.5 35.1 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.4 39.7 16.2 44 24 44z"
                            />

                            <path
                                fill="#1976D2"
                                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-4.1 5.4-7.3 6.3l6.1 5.2C33.6 40.6 44 34 44 24c0-1.2-.1-2.3-.4-3.5z"
                            />
                        </svg>
                        Continue with Google
                    </button>

                    <p className="text-muted mt-6 text-center text-sm">
                        Already have account
                        <Link
                            to={"/login"}
                            type="button"
                            className="text-primary ml-2 text-base font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Register;
