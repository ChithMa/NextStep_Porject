import type { Metadata } from "next";
import { RegisterProvider } from "@/components/Register/RegisterContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextStep - Internship Management System",
  description: "Internship management platform for students, coordinators, and administrators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RegisterProvider>
          {children}
        </RegisterProvider>
      </body>
    </html>
  );
}
