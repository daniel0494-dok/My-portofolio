import Button from "./button";

export default function Card({ image, tags, name, price }) {
  return (
    <div className="border bg-brand-400 border-brand-600">
      <img src={image} alt="" />
      <div className="p-6">
        <div className="flex gap-2">
          {tags?.map((tag, index) => (
            <span
              className="bg-brand-500 px-4 text-xs border border-brand-600"
              key={tag - { index }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-xl font-bold text-brand-900 my-4">{name}</h4>

        <div className="flex mt-8 items-center justify-between">
          <span className="">{price}</span>
          <Button className={"primary"}>TAMBAH</Button>
        </div>
      </div>
    </div>
  );
}
