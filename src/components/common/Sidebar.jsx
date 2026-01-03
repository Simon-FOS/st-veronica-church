"use client";

import Link from "next/link";
import { sidebarMenu } from "@/lib/menuConfig";

export default function Sidebar({ role }) {
    const menuItems = sidebarMenu[role] || [];

    return (
        <aside
            className="border-end"
            style={{
                width: "250px",
                minHeight: "100vh",
                backgroundColor: "#fff",
            }}
        >
            <div className="p-3 border-bottom fw-bold">
                {role?.toUpperCase()} PANEL
            </div>

            <ul className="nav flex-column p-2">
                {menuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <Link
                            href={item.path}
                            className="nav-link text-dark"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
