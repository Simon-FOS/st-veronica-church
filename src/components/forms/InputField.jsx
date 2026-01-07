export default function InputField({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
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

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="form-control"
                required={required}
            />
        </div>
    );
}
