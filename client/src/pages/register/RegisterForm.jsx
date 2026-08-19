import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { handleRegister, loading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await handleRegister(form);

        if (result) {
            navigate("/");
        }
    }

    return (
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
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
    );
};

export default RegisterForm;
