import Button from "./ui/button";

export default function Footer() {
  const feature = [
    {
      id: 1,
      title: "GARANSI RESMI 1 TAHUN",
      desc: "Jaminan unit baru, segel pabrik, dan klaim garansi PCB/wireless resmi.",
    },
    {
      id: 2,
      title: "PACKING EXTRA AMAN",
      desc: "Dilapisi bubble wrap tebal & kardus pelindung agar box mulus tiba di tujuan.",
    },
    {
      id: 3,
      title: "KNOSULASI BUILD GRATIS",
      desc: "Bingung pilih karakter switch linear atau tactile? Tim kami siap bantu.",
    },
    {
      id: 4,
      title: "GARANSI RESMI 1 TAHUN",
      desc: "Tersedia juga di Tokopedia & Shopee Official Store dengan pengiriman instan.",
    },
  ];

  const footerLinks = [
    "Keyboards & Kits",
    "Switches",
    "Keycaps",
    "Lube & Modding",
  ];

  const stores = [
    "Web Store (rumahkeyboard.com",
    "Tokopedia Official Store",
    "Shopee Mall Official",
    "Instagram @rumahkeyboard",
  ];

  return (
    <div className="bg-brand-400">
      <div className="border-b border-brand-600">
        <div className="max-w-7xl m-auto">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {feature.map((feat) => (
              <li key={feat.id} className="flex items-start p-8 gap-4">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center border border-brand-800 font-bold ${feat.id === 4 ? "secondary border-0" : ""}`}
                >
                  {feat.id}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">{feat.title}</span>
                  <span className="text-brand-700">{feat.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-brand-500">
        <div className=" max-w-7xl m-auto px-4 py-20">
          <div className="grid justify-between grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-20">
            <div className="flex flex-col items-start  gap-3">
              <div className="flex items-center gap-2  group cursor-pointer">
                <span className="p-1 rounded-xs text-white bg-brand-800 group-hover:bg-brand-900 duration-200">
                  RK
                </span>
                <h1 className="font-bold">RUMAH KEYBOARD</h1>
              </div>
              <p className="text-brand-700">
                Destinasi utama mechanical keyboard, custom switch, keycaps, dan
                perlengkapan modding anusias di Indoensia
              </p>
              <div className="">
                <span className="text-xs text-brand-700 py-2 inline-block">
                  NEWSLETTER // INFO RESTOCK 7 GROUP BUY
                </span>
                <div className="flex items-stretch border border-brand-800 bg-brand-400">
                  <input
                    type="text"
                    className=""
                    placeholder="contoh@gmail.com"
                  />
                  <Button className={"primary"}>DAFTAR</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <span className="font-bold">KATALOG</span>
                <ul className="flex flex-col gap-2">
                  {footerLinks.map((link) => (
                    <li key={link}>
                      <a
                        href=""
                        className="text-brand-700 hover:text-brand-900 duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold">OFFICIAL STORES</span>
                <ul className="flex flex-col gap-2">
                  {stores.map((store) => (
                    <li key={store}>
                      <a
                        href=""
                        className="text-brand-700 hover:text-brand-900 duration-200"
                      >
                        {store}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold">OPERASIONAL</span>
              <div className="flex flex-col">
                <span className="text-brand-700">JAKARTA, INDONESIA</span>
                <span className="text-brand-700">SENIN - SABTU</span>
                <span className="text-brand-700">09:00 - 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
