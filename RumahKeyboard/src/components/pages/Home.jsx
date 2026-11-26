import Hero from "../Hero";
import Catalogue from "../Catalogue";
import Information from "../Information";
import { useStore } from "../../context/StoreContext";

export default function Home() {
  const { products, addToCart } = useStore();
  return (
    <>
      <Hero />
      <Catalogue products={products} onAddToCart={addToCart} />
      <Information />
    </>
  );
}
