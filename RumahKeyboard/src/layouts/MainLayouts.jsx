import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/ui/CartDrawer";
import { useStore } from "../context/StoreContext";

export default function MainLayouts() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQty,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useStore();

  return (
    <>
      <Navbar totalItems={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
      />
    </>
  );
}
