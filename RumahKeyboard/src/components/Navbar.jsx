import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ totalItems, onOpenCart }) {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  const menu = ["KEYBOARDS", "SWITCHES", "KEYCAPS", "MODDING & LUBE"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-brand-500 z-10 border-b border-brand-600 sticky top-0">
      <div className="flex p-4 max-w-7xl justify-between m-auto">
        <div className="flex gap-3 items-center group cursor-pointer">
          <span className="p-1 rounded-xs text-white bg-brand-800 group-hover:bg-brand-900 duration-200">
            RK
          </span>
          <h1 className="font-bold">RUMAH KEYBOARD</h1>
        </div>
        <ul className=" hidden items-center gap-4 md:flex">
          {menu.map((links) => (
            <li key={links} className="hover:text-brand-900">
              <a href="">{links}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button
            onClick={onOpenCart}
            className={"primary flex items-center gap-2 hover:"}
          >
            <ShoppingCart className="h-5 w-5" />
            CART
            <span className="bg-brand-900 w-8 text-center text-sm font-bold tabular-nums shrink-0">
              {totalItems}
            </span>
          </Button>
          <Link to={isAdminPage ? "/" : "/admin"}>
            <Button type="button">
              {isAdminPage ? "KEMBALI KE TOKO" : "ADMIN"}
            </Button>
          </Link>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className={"md:hidden"}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${isOpen === false ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}
      >
        <ul className="md:hidden bg-brand-400 overflow-hidden">
          {menu.map((links) => (
            <li
              key={links}
              className="hover:text-brand-900 p-4 border-b border-brand-600"
            >
              <a href="">{links}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
