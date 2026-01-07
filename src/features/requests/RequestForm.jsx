"use client";

import InputField from "@/components/forms/InputField";
import TextArea from "@/components/forms/TextArea";

export default function RequestForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <InputField
                label="Request Title"
                name="title"
                required
            />

            <TextArea
                label="Request Details"
                name="details"
                required
            />

            <button className="btn btn-primary">
                Submit Request
            </button>
        </form>
    );
}
