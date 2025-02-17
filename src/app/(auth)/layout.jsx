import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import Link from "next/link";

function layoutAuth({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable}  font-sans `}>
        <Link href={'/'}>بازگشت به صفحه اصلی</Link>
        <div className="flex items-center justify-center w-full min-h-svh">
             <div>{children}</div>
        </div>
       
      </body>
    </html>
  );
}

export default layoutAuth;
