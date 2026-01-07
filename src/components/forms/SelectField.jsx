export default function SelectField({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false,
}) {
    return (
        <div className="mb-3">
            {label && (
                <label className="form-label">
                    {label}
                    {required && <span className="text-danger"> *</span>}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={onChange}
                className="form-select"
                required={required}
            >
                <option value="">-- Select --</option>

                {options.map((opt, index) => (
                    <option key={index} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
