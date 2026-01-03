export default function Footer() {
    return (
        <footer className="bg-light border-top mt-auto">
            <div className="container py-3 text-center">
                <small className="text-muted">
                    © {new Date().getFullYear()} St. Veronica Catholic Church.
                    <br />
                    All rights reserved.
                </small>
            </div>
        </footer>
    );
}
