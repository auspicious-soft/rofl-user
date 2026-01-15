import type { Metadata } from "next";
import Navbar from "../components/Navbar"; // Adjust if needed
import Footer from "../components/Footer"; // Add this import (adjust path if Footer is elsewhere, e.g., '../../components/Footer')
import localFont from "next/font/local";

const cabinetGrotesk = localFont({
  src: '../assets/fonts/CabinetGrotesk-Regular.otf',
  variable:"--font-cabinetGrotesk",
  display: "swap",
})
const bricolage = localFont({
  src: '../assets/fonts/BricolageGrotesque.ttf',
  variable:"--font-bricolage",
  display: "swap",
}) 
export const metadata: Metadata = {
  title: "User Panel",
  description: "User dashboard and management panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ background: "#14141A" }}
        className={`${cabinetGrotesk.variable}  ${bricolage.variable} min-h-screen antialiased overflow-auto`} // Changed h-screen to min-h-screen and overflow-hidden to overflow-auto to ensure footer is visible without cutoff
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}