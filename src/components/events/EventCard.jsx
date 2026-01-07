export default function EventCard({ title, description, date, image }) {
    return (
        <div className="card h-100 shadow-sm">
            {image && (
                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    style={{ height: "180px", objectFit: "cover" }}
                />
            )}

            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                {date && (
                    <small className="text-muted d-block mb-2">
                        {date}
                    </small>
                )}

                <p className="card-text">
                    {description}
                </p>
            </div>
        </div>
    );
}
