import PageHeader from "@/components/common/PageHeader";
import AnnouncementList from "@/components/announcements/AnnouncementList";

export default function StaffDashboard() {
    const announcements = [];

    return (
        <>
            <PageHeader
                title="Staff Dashboard"
                subtitle="Manage parish communications and requests"
            />

            <h5>Recent Announcements</h5>
            <AnnouncementList announcements={announcements} />
        </>
    );
}
