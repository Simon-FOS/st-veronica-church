"use client";

import InputField from "@/components/forms/InputField";

export default function LoginForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <InputField
                label="Email Address"
                type="email"
                name="email"
                required
            />

            <InputField
                label="Password"
                type="password"
                name="password"
                required
            />

            <button className="btn btn-primary w-100">
                Login
            </button>
        </form>
    );
}
