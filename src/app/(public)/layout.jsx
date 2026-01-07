import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function PublicLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="container my-4">
                {children}
            </main>
            <Footer />
        </>
    );
}
