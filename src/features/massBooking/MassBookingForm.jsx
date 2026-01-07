"use client";

import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { MASS_INTENTIONS } from "@/lib/constants";

export default function MassBookingForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <SelectField
                label="Mass Intention"
                name="intention"
                options={MASS_INTENTIONS}
                required
            />

            <InputField
                label="Preferred Date"
                type="date"
                name="date"
                required
            />

            <button className="btn btn-primary">
                Book Mass
            </button>
        </form>
    );
}
