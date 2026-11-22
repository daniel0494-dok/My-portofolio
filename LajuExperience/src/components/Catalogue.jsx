import { products } from "../data/product";
import Button from "./ui/button";
import Card from "./ui/card";
import { useState } from "react";

export default function Catalogue({ onAddToCart }) {
  // FILTER HANDLER
  const categoryBtn = ["ALL", "KEYBOARD", "SWITCH", "ACCESORIES", "KEYCAPS"];

  const [activeBtn, setActiveBtn] = useState(categoryBtn[0]);

  // SEARCH HANDLER
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProduct = products.filter((product) => {
    const matchesCategory =
      activeBtn === "ALL" || product.category === activeBtn;

    const matchesSearch =
      normalizedQuery === "" ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      (Array.isArray(product.tags) &&
        product.tags.some((tag) =>
          String(tag).toLocaleLowerCase().includes(normalizedQuery),
        ));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl m-auto px-4 py-10">
      <div className="flex flex-col gap-4 py-8 border-b border-brand-600">
        <h2 className="text-5xl font-bold">
          {" "}
          <span className="text-brand-900">//</span>KATALOG UTAMA
        </h2>
        <div className="flex flex-wrap gap-3">
          {categoryBtn.map((btn) => (
            <Button
              key={btn}
              onClick={() => setActiveBtn(btn)}
              className={
                activeBtn === btn ? "bg-brand-800 text-brand-400" : "button"
              }
            >
              {btn}
            </Button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama produk atau tag..."
            aria-label="Cari produk"
            className="w-full sm:w-72 border border-brand-600 bg-brand-400 px-3 py-2 text-brand-900 placeholder:text-brand-900/60 focus:outline-none"
          />
          {searchQuery && (
            <Button
              type="button"
              onClick={() => setSearchQuery("")}
              className="bg-brand-400 text-brand-900"
            >
              RESET
            </Button>
          )}
        </div>
      </div>

      {filteredProduct.length === 0 ? (
        <div className="py-10 min-h-100 flex items-center justify-center">
          <p className="font-bold text-brand-900">
            barang belum terseida, stay tuned ya!
          </p>
        </div>
      ) : (
        <div className="py-10 grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-4">
          {filteredProduct.map((p) => (
            <Card
              onAddToCart={onAddToCart}
              id={p.id}
              image={p.image}
              key={p.id}
              name={p.name}
              price={p.price}
              tags={p.tags}
            />
          ))}
        </div>
      )}
    </div>
  );
}
