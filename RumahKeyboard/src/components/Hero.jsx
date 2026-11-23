import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
// import JumboImg from "../assets/IMG_20261118_162515.jpg";
import { useState } from "react";
import { products } from "../data/product";
import { amount } from "../lib/utils";

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

  const bestSeller = [...products].sort((a, b) => b.sold - a.sold).slice(0, 3);

  const [activeIndex, setActiveIndex] = useState(0);

  const currentProduct = bestSeller[activeIndex];

  return (
    <div className="max-w-7xl m-auto items-center grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-10  px-4 py-10">
      <div className="flex flex-col gap-8 items-start py-10">
        <div className="flex border items-center border-brand-600 bg-brand-400 p-1 text-brand-700 ">
          <span className="inline-block h-2 w-2 bg-brand-900 mx-4"></span>
          <span className="">[ EST. JAKARTA // CUSTOM & ENTHUSIAST GEAR ]</span>
        </div>

        <h1 className="font-bold text-6xl">
          <span className="text-brand-900">//</span>
          PRECISION TACTILE <span className="text-brand-900">HARDWARE.</span>
        </h1>
        <p className="text-brand-700">
          Kurasi mechanical keyboard aluminium CNC, switch factory-lubed,
          keycaps profil presisi, hingga perlengkapan modding untuk pengalaman
          mengetik berkarakter tanpa kompromi.
        </p>
        <div className="flex gap-3">
          <Button
            className={
              "secondary flex items-center justify-center gap-2 font-bold"
            }
          >
            JELAJAHI KATALOG
            <ArrowRight className="h-4 w-4 arrow-animate" />
          </Button>
          <Button>KOLEKSI TERBARU</Button>
        </div>
        <div className="grid grid-cols-3 bg-brand-400  border border-brand-600">
          {offer.map((o) => (
            <div key={o.title} className="offer flex flex-col gap-2 p-3">
              <span className="text-brand-700">{o.title}</span>
              <span className="font-bold">{o.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-brand-400 border border-brand-600 py-10 ">
        <div className="p-10">
          <div className="">
            <div className="border-b flex justify-between border-brand-600 pb-8">
              <span className="text-brand-700">LEOBOG HI75C PRO</span>
              <span className="text-brand-800 font-bold">BEST SELLER</span>
            </div>
            <div className="py-4 border-b border-brand-600">
              <div className="relative">
                <img
                  className="w-full max-h-100 aspect-square object-center object-cover"
                  src={currentProduct.image}
                  alt={currentProduct.name}
                />
                <span className="px-4 absolute top-[3%] left-[3%] bg-brand-800 text-brand-400 ">
                  {currentProduct.tags.join("//")}
                </span>
              </div>
            </div>
            <div className="flex py-8 gap-4">
              <div className="">
                <h1 className="font-bold">{currentProduct.name}</h1>
                <p className="text-brand-700">{currentProduct.desc}</p>
              </div>
              <div className="">
                <span className="text-brand-900 font-bold">
                  {amount(currentProduct.price)}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-2">
              {bestSeller.map((item, index) => (
                <Button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`tertiary flex-1 ${activeIndex === index ? "bg-brand-800 text-brand-400" : ""}`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
