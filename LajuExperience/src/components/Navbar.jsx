import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const menu = [
    "KEYBOARDS",
    "SWITCHES",
    "KEYCAPS",
    "MODDING & LUBE",
    "DESKAMTS & TOOLS",
  ];

  return (
    <div className=" border-b border-brand-600">
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
          <Button className={"primary flex items-center gap-2 hover:"}>
            <ShoppingCart className="h-5 w-5" />
            CART
            <span className="bg-brand-900 px-2 rounded-xs">2</span>
          </Button>
          <Button className={""}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
