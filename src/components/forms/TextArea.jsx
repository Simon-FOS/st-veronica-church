export default function TextArea({
    label,
    name,
    value,
    onChange,
    rows = 4,
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

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                placeholder={placeholder}
                className="form-control"
                required={required}
            ></textarea>
        </div>
    );
}
