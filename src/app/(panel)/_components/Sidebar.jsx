import Link from "next/link"

function Sidebar() {
  return (
    <div className="w-full">
        <nav className="w-full">
            <ul className="w-full flex flex-col space-y-8">
                <li>
                    <Link href={'/'}>صفحه اصلی</Link>
                </li>
                <li>
                    <Link href={'/profile/me'}>اطلاعات کاربری </Link>
                </li>
                <li>
                    <Link href={'/me'}>خروج </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar