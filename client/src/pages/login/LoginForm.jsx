import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { handleLogin, loading } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await handleLogin(form);

        if (result) {
            navigate("/");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
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
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="border-border text-text placeholder:text-muted focus:border-primary w-full rounded-md border bg-white px-3 py-3 pr-11 text-sm outline-none transition"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-muted hover:text-text absolute top-1/2 right-3 -translate-y-1/2"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            <div className="flex items-center justify-between pt-1">
                <label className="text-muted flex cursor-pointer items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        className="accent-primary h-4 w-4 cursor-pointer"
                    />

                    <span>Remember me</span>
                </label>

                <button
                    type="button"
                    className="text-primary text-sm font-medium hover:underline"
                >
                    Forgot Password?
                </button>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 mt-3 w-full rounded-full px-4 py-3 text-sm font-semibold text-white transition disabled:opacity-60"
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;
