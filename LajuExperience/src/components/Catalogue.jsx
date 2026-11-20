import { products } from "../data/product";
import Button from "./ui/button";
import Card from "./ui/card";
import { useState } from "react";

export default function Catalogue() {
  // FILTER HANDLER
  const categoryBtn = ["ALL", "KEYBOARD", "SWITCH", "ACCESORIES", "KEYCAPS"];

  const [activeBtn, setActiveBtn] = useState(categoryBtn[0]);

  const filteredProduct =
    activeBtn === "ALL"
      ? products
      : products.filter((product) => product.category === activeBtn);
  return (
    <div className="px-4">
      <div className="flex flex-col gap-4 py-8 border-b border-brand-600">
        <h2 className="text-3xl font-bold">
          {" "}
          <span className="text-brand-900">//</span>KATALOG UTAMA
        </h2>
        <div className="flex flex-wrap gap-3">
          {categoryBtn.map((btn) => (
            <Button
              key={btn}
              onClick={() => setActiveBtn(btn)}
              className={
                activeBtn === btn
                  ? "bg-brand-800 text-brand-400"
                  : "bg-brand-400"
              }
            >
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="py-10 flex flex-col gap-4">
        {filteredProduct.map((p) => (
          <Card
            image={p.image}
            key={p.id}
            name={p.name}
            price={p.price}
            tags={p.tags}
          />
        ))}
      </div>
    </div>
  );
}
