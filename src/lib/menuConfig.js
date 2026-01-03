export const sidebarMenu = {
    parishioner: [
        { label: "Dashboard", path: "/parishioner" },
        { label: "Book Mass", path: "/parishioner/mass-booking" },
        { label: "My Requests", path: "/parishioner/requests" },
        { label: "Profile", path: "/parishioner/profile" },
    ],

    staff: [
        { label: "Requests", path: "/staff/requests" },
        { label: "Announcements", path: "/staff/announcements" },
        { label: "Events", path: "/staff/events" },
        { label: "Gallery", path: "/staff/gallery" },
    ],

    admin: [
        { label: "Overview", path: "/admin" },
        { label: "Staff Management", path: "/admin/staff" },
        { label: "Settings", path: "/admin/settings" },
    ],
};
