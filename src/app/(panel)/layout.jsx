"use client";
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import { Toaster } from "react-hot-toast";

import Providers from "@/providers/providers";
import Sidebar from "./_components/Sidebar";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable}  font-sans `}>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-4 bg-white h-screen">
            <div className="bg-gray-100 col-span-1 p-4 overflow-y-auto">
              <Sidebar />
            </div>
            <div className="col-span-3 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
