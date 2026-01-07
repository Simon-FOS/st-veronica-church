import PageHeader from "@/components/common/PageHeader";

export default function AdminDashboard() {
    return (
        <>
            <PageHeader
                title="Admin Dashboard"
                subtitle="Parish oversight and administration"
            />

            <p className="text-muted">
                From here, you will manage staff access, system settings,
                and overall parish activity.
            </p>
        </>
    );
}
