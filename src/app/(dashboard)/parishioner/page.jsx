import PageHeader from "@/components/common/PageHeader";
import RequestList from "@/features/requests/RequestList";
import MassBookingList from "@/features/massBooking/MassBookingList";

export default function ParishionerDashboard() {
    const requests = [];
    const bookings = [];

    return (
        <>
            <PageHeader
                title="Parishioner Dashboard"
                subtitle="Your requests and Mass bookings"
            />

            <div className="row">
                <div className="col-md-6">
                    <h5>My Requests</h5>
                    <RequestList requests={requests} />
                </div>

                <div className="col-md-6">
                    <h5>My Mass Bookings</h5>
                    <MassBookingList bookings={bookings} />
                </div>
            </div>
        </>
    );
}
