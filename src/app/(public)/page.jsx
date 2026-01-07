import PageHeader from "@/components/common/PageHeader";

export default function HomePage() {
    return (
        <>
            <PageHeader
                title="Welcome to St. Veronica Catholic Church"
                subtitle="A community of faith, worship, and service"
            />

            <p className="lead">
                This platform helps parishioners stay connected with parish life,
                announcements, events, and spiritual resources.
            </p>
        </>
    );
}
