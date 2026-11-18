import BgImage from "../assets/IMG_20261118_162515.jpg";
import Button from "./ui/Button";

export default function Hero(props) {
  return (
    <div
      className="py-10 flex flex-col gap-5 bg-cover bg-center p-4 "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1 className="text-5xl font-bold">
        Explore the World <br /> of KEYBS
      </h1>
      <p className="text-[#dce2de]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        reiciendis minus quas vero ex eum.
      </p>
      <Button className={"submit w-1/2"}>Explore Destination</Button>
    </div>
  );
}
