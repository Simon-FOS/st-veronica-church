"use client";

import InputField from "@/components/forms/InputField";

export default function RegisterForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <InputField label="Full Name" name="name" required />
            <InputField label="Email" type="email" name="email" required />
            <InputField label="Phone Number" name="phone" required />
            <InputField label="Password" type="password" name="password" required />

            <button className="btn btn-primary w-100">
                Register
            </button>
        </form>
    );
}
