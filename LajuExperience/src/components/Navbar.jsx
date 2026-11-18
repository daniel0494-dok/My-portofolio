import SearchBar from "./ui/Button";
import Button from "./ui/Button";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  // const menu=["Home", "Destination", "Tours", "Travel Guide", "About Us"]

  return (
    <div className="text-black flex items-center justify-between p-4">
      <h1 className="text-lg font-bold leading-5 cursor-pointer">
        <span className="text-[#d34f30]">My</span>{" "}
        <span className="text-[#901d33]">Keyboard</span> <br />{" "}
        <span className="text-[#00238a]">Store</span>
      </h1>
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <a
              className="group relative py-1 text-white/80 transition-colors hover:text-white"
              href=""
            >
              Home
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="group relative py-1 text-white/80 transition-colors hover:text-white"
              href=""
            >
              Destinations
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="group relative py-1 text-white/80 transition-colors hover:text-white"
              href=""
            >
              Tours
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="group relative py-1 text-white/80 transition-colors hover:text-white"
              href=""
            >
              Travel Guide
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="group relative py-1 text-white/80 transition-colors hover:text-white"
              href=""
            >
              About Us
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
        <Button className={"submit"}>Buy Now</Button>
      </div>
      <button className="p-2 text-white md:hidden duration-100 bg-[#2c2c2c] hover:bg-[#982138] rounded-sm">
        <Menu className="h-6 w-6 cursor-pointer" />
      </button>
    </div>
  );
}
