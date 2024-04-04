import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });;

import Loading from "./loading";

export const metadata = {
  title: "Ticket system app",
  description: "support your department with ticket system app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
        </body>
    </html>
  );
}
