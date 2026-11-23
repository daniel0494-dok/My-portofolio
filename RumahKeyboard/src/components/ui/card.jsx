import Button from "./button";
import { amount } from "../../lib/utils";

export default function Card({ image, tags, name, price, id, onAddToCart }) {
  return (
    <div className="border bg-brand-400 border-brand-600 flex flex-col">
      <img
        src={image}
        className="aspect-square object-cover w-full"
        alt={name}
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              className="bg-brand-500 px-4 text-xs border border-brand-600"
              key={`${tag} - ${index}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-xl font-bold text-brand-900 my-4">{name}</h4>

        <div className="flex mt-auto pt-8 items-center justify-between">
          <span className="">{amount(price)}</span>
          <Button
            onClick={() => onAddToCart({ id, image, tags, name, price })}
            className={"primary"}
          >
            TAMBAH
          </Button>
        </div>
      </div>
    </div>
  );
}
