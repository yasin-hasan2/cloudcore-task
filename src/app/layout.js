// app/layout.js
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./globals.css";

export const metadata = {
  title: "StyleAura",
  description: "Fashion Product Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <Navbar />
        <body className="bg-white text-gray-800">{children}</body>
        <Footer />
      </div>
    </html>
  );
}
