"use client";

import InputField from "@/components/forms/InputField";

export default function ProfileForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <InputField label="Full Name" name="name" />
            <InputField label="Email" type="email" name="email" />
            <InputField label="Phone Number" name="phone" />
            <InputField label="Address" name="address" />

            <button className="btn btn-primary">
                Update Profile
            </button>
        </form>
    );
}
