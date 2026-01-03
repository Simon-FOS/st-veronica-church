export default function PageHeader({ title, subtitle, actions }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 className="mb-0">{title}</h2>
                {subtitle && (
                    <small className="text-muted">{subtitle}</small>
                )}
            </div>

            {actions && <div>{actions}</div>}
        </div>
    );
}
