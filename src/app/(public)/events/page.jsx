import PageHeader from "@/components/common/PageHeader";
import EventCard from "@/components/events/EventCard";

export default function EventsPage() {
    const events = [
        {
            title: "Youth Rally",
            description: "A day of prayer, talks, and fellowship for young people.",
            date: "August 3, 2026",
        },
    ];

    return (
        <>
            <PageHeader
                title="Parish Events"
                subtitle="Upcoming activities in our parish"
            />

            <div className="row g-3">
                {events.map((event, index) => (
                    <div key={index} className="col-md-4">
                        <EventCard {...event} />
                    </div>
                ))}
            </div>
        </>
    );
}
