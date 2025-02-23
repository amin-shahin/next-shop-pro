"use client";
import { useGetUserData } from "@/hooks/useAuth";
import { getUserProfileDataApi } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function Header() {
  const { data, error, isLoading} = useGetUserData()

  const {user, cart } = data || {};
  console.log(data);
  

  return (
    <header className="shadow-md mb-10">
      <nav>
        <ul
          className={`flex items-center justify-between container py-2 xl:max-w-screen-xl transition-all duration-500 ${
            isLoading ? "blur-sm" : "blur-0"
          }`}
        >
          <li>
            <Link className="block py-2" href={"/"}>
              خانه
            </Link>
          </li>
          <li>
            <Link className="block py-2" href={"/products"}>
              محصولات
            </Link>
          </li>
          <li>
            <Link className="block py-2" href={"/cart"}>
              سبد خرید ({cart ? cart.payDetail.orderItems.length : 0})
            </Link>
          </li>
          <li>
            <Link className="block py-2" href={"/signin"}>
              {user ? user.name : "ورود"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
