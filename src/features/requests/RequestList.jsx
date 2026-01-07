export default function RequestList({ requests = [] }) {
    if (requests.length === 0) {
        return (
            <div className="alert alert-info">
                No requests found.
            </div>
        );
    }

    return (
        <ul className="list-group">
            {requests.map((req, index) => (
                <li key={index} className="list-group-item">
                    <strong>{req.title}</strong>
                    <div className="text-muted small">
                        Status: {req.status}
                    </div>
                </li>
            ))}
        </ul>
    );
}
