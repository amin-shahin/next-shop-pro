'use client'
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import Header from "./_components/Header";
import { Toaster } from "react-hot-toast";
import { QueryClient } from "@tanstack/react-query";
import Providers from "@/providers/providers";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable}  font-sans `}>
        <Toaster />
        <Header />
        <div className="xl:max-w-screen-xl container">
          <Providers>{children} </Providers>
        </div>
      </body>
    </html>
  );
}
