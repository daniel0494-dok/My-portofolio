export default function Footer(props) {
  return (
    <div class="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-brand-800">
      <div class="flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/15 pb-3">
        <span>EXPLODED VIEW // GASKET ARCHITECTURE</span>
        <span class="text-signal">REV 2.4</span>
      </div>

      {/* <!-- Custom Architectural Exploded Mechanical Keyboard Diagram --> */}
      <div class="my-8 flex items-center justify-center">
        <svg
          viewBox="0 0 400 280"
          class="w-full max-w-md h-auto"
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
            stroke-opacity="0.35"
            stroke-dasharray="3 3"
          />
          <line
            x1="20"
            y1="100"
            x2="380"
            y2="100"
            stroke="#FFFFFF"
            stroke-opacity="0.15"
            stroke-dasharray="3 3"
          />
          <line
            x1="20"
            y1="155"
            x2="380"
            y2="155"
            stroke="#FFFFFF"
            stroke-opacity="0.15"
            stroke-dasharray="3 3"
          />
          <line
            x1="20"
            y1="215"
            x2="380"
            y2="215"
            stroke="#FFFFFF"
            stroke-opacity="0.15"
            stroke-dasharray="3 3"
          />

          {/* <!-- Layer 1: Keycap Profile --> */}
          <path
            d="M110 25 H250 L262 55 H98 L110 25 Z"
            stroke="#F4F4F0"
            stroke-width="1.5"
            fill="#161616"
          />
          <text
            x="275"
            y="43"
            fill="#F4F4F0"
            font-family="JetBrains Mono"
            font-size="9"
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
            stroke-width="1.5"
            fill="#161616"
          />
          <rect x="172" y="65" width="16" height="10" fill="#FF4D00" />
          <line
            x1="168"
            y1="107"
            x2="168"
            y2="116"
            stroke="#FF4D00"
            stroke-width="1.5"
          />
          <line
            x1="192"
            y1="107"
            x2="192"
            y2="116"
            stroke="#FF4D00"
            stroke-width="1.5"
          />
          <text
            x="275"
            y="95"
            fill="#FF4D00"
            font-family="JetBrains Mono"
            font-size="9"
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
            stroke-width="1.2"
            fill="#161616"
          />
          <rect x="65" y="133" width="10" height="12" fill="#FF4D00" />
          <rect x="285" y="133" width="10" height="12" fill="#FF4D00" />
          <text
            x="275"
            y="152"
            fill="#F4F4F0"
            font-family="JetBrains Mono"
            font-size="9"
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
            stroke-width="1.2"
            fill="#161616"
          />
          <text
            x="275"
            y="183"
            fill="#595955"
            font-family="JetBrains Mono"
            font-size="9"
          >
            04. HOT-SWAP PCB
          </text>

          {/* <!-- Layer 5: CNC 6063 Aluminum Bottom Case --> */}
          <path
            d="M60 210 H300 L290 245 H70 L60 210 Z"
            stroke="#F4F4F0"
            stroke-width="1.5"
            fill="#161616"
          />
          <text
            x="275"
            y="232"
            fill="#F4F4F0"
            font-family="JetBrains Mono"
            font-size="9"
          >
            05. CNC CASE
          </text>
        </svg>
      </div>

      <div class="font-mono text-[11px] text-white/60 flex items-center justify-between border-t border-white/15 pt-3">
        <span>TOLERANCE: ±0.05MM</span>
        <span>ACOUSTIC DAMPENING: PORON + IXPE</span>
      </div>
    </div>
  );
}
