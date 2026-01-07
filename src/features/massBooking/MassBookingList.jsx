export default function MassBookingList({ bookings = [] }) {
    if (bookings.length === 0) {
        return (
            <div className="alert alert-info">
                No Mass bookings yet.
            </div>
        );
    }

    return (
        <ul className="list-group">
            {bookings.map((item, index) => (
                <li key={index} className="list-group-item">
                    <strong>{item.intention}</strong> – {item.date}
                    <div className="small text-muted">
                        Status: {item.status}
                    </div>
                </li>
            ))}
        </ul>
    );
}
