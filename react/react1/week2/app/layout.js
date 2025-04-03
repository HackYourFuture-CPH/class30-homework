import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galactica",
  description: "Your space travel agency",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* TASK - React 1 week 1 */}
        {/* Import and use the Footer component here */}
        <Footer />
        {/* Footer found in the ui/Footer.js folder */}
      </body>
    </html>
  );
};

export default RootLayout;
