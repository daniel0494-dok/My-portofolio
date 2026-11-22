import Button from "./ui/button";

export default function Information() {
  const steps = [
    {
      id: "step 01",
      title: "SWITCH LUBING",
      desc: "Krytox 205g0 & GPL 105 untuk stem dan srping halus.",
    },
    {
      id: "step 02",
      title: "STABILIZER TUNING",
      desc: "Permatex Dieletric Grease anti-rattle pada spacebar.",
    },
    {
      id: "step 03",
      title: "ACOUSTIC FOAM",
      desc: " Poron plate foam & tape mod untuk profil suara thock.",
    },
  ];
  return (
    <div className="bg-brand-800">
      <div className="max-w-7xl  m-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-10">
        <div className="flex flex-col  px-4 py-10 gap-10 pb-10">
          <h2 className="text-brand-400 text-5xl font-bold">
            <span className="text-brand-900">//</span>
            TUNING AKUSTIK. <br />
            <span className="text-brand-700">PRESISI DI SETIAP TEKANAN</span>
          </h2>
          <p className="text-brand-700">
            Hilangkan suara *rattle* dan *spring ping*. Kami menyediakan pelumas
            standar antusias seperti Krytox 205g0, Permatex 22058, IXPE switch
            pad, hingga peralatan pembuka switch presisi tinggi.
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-4 gap-4">
            {steps.map((step) => (
              <li
                key={step.id}
                className="p-4 bg-brand-300 flex flex-col gap-2 border border-brand-700"
              >
                <span className="text-brand-900">{step.id}</span>
                <span className="text-brand-400">{step.title}</span>
                <span className="text-brand-700 text-xs">{step.desc}</span>
              </li>
            ))}
          </ul>
          <Button className={"secondary"}>BELANJA PERLENGKAPAN MODDING</Button>
        </div>
        <div className="flex flex-col  px-4 py-10 border border-brand-700 justify-center bg-brand-300">
          <div className="flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/15 pb-3">
            <span>EXPLODED VIEW // GASKET ARCHITECTURE</span>
            <span className="text-signal">REV 2.4</span>
          </div>

          {/* <!-- Custom Architectural Exploded Mechanical Keyboard Diagram --> */}
          <div className="my-8 flex items-center justify-center">
            <svg
              viewBox="0 0 400 280"
              className="w-full max-w-md h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <!-- Grid reference lines --> */}
              <line
                x1="20"
                y1="45"
                x2="380"
                y2="45"
                stroke="#FF4D00"
                strokeOpacity="0.35"
                strokeasharray="3 3"
              />
              <line
                x1="20"
                y1="100"
                x2="380"
                y2="100"
                stroke="#FFFFFF"
                strokeOpacity="0.15"
                strokeasharray="3 3"
              />
              <line
                x1="20"
                y1="155"
                x2="380"
                y2="155"
                stroke="#FFFFFF"
                strokeOpacity="0.15"
                strokeasharray="3 3"
              />
              <line
                x1="20"
                y1="215"
                x2="380"
                y2="215"
                stroke="#FFFFFF"
                strokeOpacity="0.15"
                strokeasharray="3 3"
              />

              {/* <!-- Layer 1: Keycap Profile --> */}
              <path
                d="M110 25 H250 L262 55 H98 L110 25 Z"
                stroke="#F4F4F0"
                strokeWidth="1.5"
                fill="#161616"
              />
              <text
                x="275"
                y="43"
                fill="#F4F4F0"
                fontFamily="JetBrains Mono"
                fontSize="9"
              >
                01. PBT KEYCAP
              </text>

              {/* <!-- Layer 2: Mechanical Switch --> */}
              <rect
                x="155"
                y="75"
                width="50"
                height="32"
                stroke="#FF4D00"
                strokeWidth="1.5"
                fill="#161616"
              />
              <rect x="172" y="65" width="16" height="10" fill="#FF4D00" />
              <line
                x1="168"
                y1="107"
                x2="168"
                y2="116"
                stroke="#FF4D00"
                strokeWidth="1.5"
              />
              <line
                x1="192"
                y1="107"
                x2="192"
                y2="116"
                stroke="#FF4D00"
                strokeWidth="1.5"
              />
              <text
                x="275"
                y="95"
                fill="#FF4D00"
                fontFamily="JetBrains Mono"
                fontSize="9"
              >
                02. 5-PIN SWITCH
              </text>

              {/* <!-- Layer 3: FR4 / Polycarbonate Plate + Gasket Tabs --> */}
              <rect
                x="75"
                y="135"
                width="210"
                height="8"
                stroke="#F4F4F0"
                strokeWidth="1.2"
                fill="#161616"
              />
              <rect x="65" y="133" width="10" height="12" fill="#FF4D00" />
              <rect x="285" y="133" width="10" height="12" fill="#FF4D00" />
              <text
                x="275"
                y="152"
                fill="#F4F4F0"
                fontFamily="JetBrains Mono"
                fontSize="9"
              >
                03. GASKET PLATE
              </text>

              {/* <!-- Layer 4: Hot-Swap PCB --> */}
              <rect
                x="85"
                y="175"
                width="190"
                height="10"
                stroke="#595955"
                strokeWidth="1.2"
                fill="#161616"
              />
              <text
                x="275"
                y="183"
                fill="#595955"
                fontFamily="JetBrains Mono"
                fontSize="9"
              >
                04. HOT-SWAP PCB
              </text>

              {/* <!-- Layer 5: CNC 6063 Aluminum Bottom Case --> */}
              <path
                d="M60 210 H300 L290 245 H70 L60 210 Z"
                stroke="#F4F4F0"
                strokeWidth="1.5"
                fill="#161616"
              />
              <text
                x="275"
                y="232"
                fill="#F4F4F0"
                fontFamily="JetBrains Mono"
                fontSize="9"
              >
                05. CNC CASE
              </text>
            </svg>
          </div>

          <div className="font-mono text-[11px] text-white/60 flex items-center justify-between border-t border-white/15 pt-3">
            <span>TOLERANCE: ±0.05MM</span>
            <span>ACOUSTIC DAMPENING: PORON + IXPE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
