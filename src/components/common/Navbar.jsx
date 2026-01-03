"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "var(--primary-color)" }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" href="/">
                    St. Veronica Parish
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/announcements">
                                Announcements
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/events">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
