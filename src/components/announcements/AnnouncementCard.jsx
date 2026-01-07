export default function AnnouncementCard({ title, content, date }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <p className="card-text">
                    {content}
                </p>

                {date && (
                    <small className="text-muted">
                        Posted on {date}
                    </small>
                )}
            </div>
        </div>
    );
}
