import "./globals.css";
import BootstrapClient from "@/components/common/BootstrapClient";

export const metadata = {
  title: "St. Veronica Catholic Church",
  description: "Parish Community Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
