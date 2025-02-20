import vazirFont from "@/constants/localFont";
import Providers from "@/providers/providers";
import "@/styles/globals.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

function layoutAuth({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable}  font-sans `}>
        <Toaster />

        <Link href={"/"}>بازگشت به صفحه اصلی</Link>
        <div className="flex items-center justify-center w-full min-h-svh">
          <Providers> {children} </Providers>
        </div>
      </body>
    </html>
  );
}

export default layoutAuth;
