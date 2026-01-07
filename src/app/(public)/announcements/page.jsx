import PageHeader from "@/components/common/PageHeader";
import AnnouncementList from "@/components/announcements/AnnouncementList";

export default function AnnouncementsPage() {
    const announcements = [
        {
            title: "Parish Council Meeting",
            content: "There will be a parish council meeting this Sunday after Mass.",
            date: "July 14, 2026",
        },
    ];

    return (
        <>
            <PageHeader
                title="Parish Announcements"
                subtitle="Latest updates from the parish"
            />

            <AnnouncementList announcements={announcements} />
        </>
    );
}
