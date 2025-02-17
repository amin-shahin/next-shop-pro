import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

function layoutAuth({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable}  font-sans `}>
        <button>بازگشت به صفحه اصلی</button>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default layoutAuth;
