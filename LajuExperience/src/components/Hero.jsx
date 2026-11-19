import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
import JumboImg from "../assets/IMG_20261118_162515.jpg";

export default function Hero() {
  const offer = [
    {
      title: "FORM FACTOR",
      desc: "65% / 75% / TKL",
    },
    {
      title: "PCB ARCHITECTURE",
      desc: "HOT-SWAPPABLE",
    },
    {
      title: "AUTHENTICITY",
      desc: "100% ORIGINAL",
    },
  ];

  return (
    <div className=" ">
      <div className="flex flex-col gap-8 p-4 items-start">
        <div className="flex border items-center border-brand-600 bg-brand-400 p-1 text-brand-700 ">
          <span className="inline-block h-2 w-2 bg-brand-900 mx-4"></span>
          <span className="">[ EST. JAKARTA // CUSTOM & ENTHUSIAST GEAR ]</span>
        </div>

        <h1 className="font-bold text-4xl">
          PRECISION TACTILE <span className="text-brand-900">HARDWARE.</span>
        </h1>
        <p className="text-brand-700">
          Kurasi mechanical keyboard aluminium CNC, switch factory-lubed,
          keycaps profil presisi, hingga perlengkapan modding untuk pengalaman
          mengetik berkarakter tanpa kompromi.
        </p>
        <div className="grid w-full max-w-xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
          <Button
            className={
              "secondary flex items-center justify-center gap-2 font-bold"
            }
          >
            JELAJAHI KATALOG
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button>KOLEKSI TERBARU</Button>
        </div>
        <div className="grid grid-cols-3  border border-brand-600">
          {offer.map((o) => (
            <div className="offer flex flex-col gap-2 p-3">
              <span className="text-brand-700">{o.title}</span>
              <span className="font-bold">{o.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-brand-400 border border-brand-600 px-4">
        <div className="">
          <div className="border-b flex justify-between border-brand-600 py-4">
            <span className="text-brand-700">LEOBOG HI75C PRO</span>
            <span className="text-brand-800 font-bold">BEST SELLER</span>
          </div>
          <div className="py-4 border-b border-brand-600">
            <div className="relative">
              <img
                className="w-full aspect-square object-center object-cover"
                src={JumboImg}
                alt=""
              />
              <span className="px-4 absolute top-[3%] left-[3%] bg-brand-800 text-brand-400 ">
                GASKET MOUNT // 75% LAYOUT
              </span>
              <span className="px-4 absolute bottom-[3%] right-[3%] bg-brand-400 border border-brand-800">
                CNC 6063 ALUMINUM
              </span>
            </div>
          </div>
          <div className="py-4">
            <h1>LEOBOG HI75C PRO</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
