import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

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
    <div className="flex flex-col gap-8 p-4 items-start ">
      <div className="flex border items-center border-[#d8d8d2] bg-white p-1 text-[#595955] ">
        <span className="inline-block h-2 w-2 bg-[#FF4D00] mx-4"></span>
        <span className="">[ EST. JAKARTA // CUSTOM & ENTHUSIAST GEAR ]</span>
      </div>

      <h1 className="font-bold text-4xl">
        PRECISION TACTILE <span className="text-[#FF4D00]">HARDWARE.</span>
      </h1>
      <p className="text-[#595955]">
        Kurasi mechanical keyboard aluminium CNC, switch factory-lubed, keycaps
        profil presisi, hingga perlengkapan modding untuk pengalaman mengetik
        berkarakter tanpa kompromi.
      </p>
      <div className="grid w-full max-w-xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
        <Button className={"secondary flex items-center justify-center gap-2"}>
          JELAJAHI KATALOG
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button>KOLEKSI TERBARU</Button>
      </div>
      <div className="grid grid-cols-3 bg-white border border-[#d8d8d2]">
        {offer.map((o) => (
          <div className="offer flex flex-col gap-2 p-3">
            <span className="text-[#595955]">{o.title}</span>
            <span className="font-bold">{o.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
