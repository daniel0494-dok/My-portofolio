// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Information from "./components/Information";
// import Catalogue from "./components/Catalogue";
// import Footer from "./components/Footer";
// import CartDrawer from "./components/ui/CartDrawer";
import Admin from "./components/Admin";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { products as initialProducts } from "./data/product";

function App() {
  // const [cart, setCart] = useState([]);

  // const [isCartOpen, setIsCartOpen] = useState(false);

  // const addToCart = (product) => {
  //   const existingItem = cart.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
  //       ),
  //     );
  //   } else {
  //     setCart([...cart, { ...product, qty: 1 }]);
  //   }
  // };

  // const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  // useEffect(() => {
  //   if (totalItems > 0) {
  //     document.title = `RumahKeyboard (${totalItems} product)`;
  //   } else {
  //     document.title = "RumahKeyboard";
  //   }
  // }, [totalItems]);

  // const updateQty = (id, delta) => {
  //   setCart((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
  //     ),
  //   ).filter((item) => item.qty > 0);
  // };

  // const removeFromCart = (id) => {
  //   setCart((prev) => prev.filter((item) => item.id !== id));
  // };

  // const totalPrice = cart.reduce(
  //   (total, item) => total + item.price * item.qty,
  //   0,
  // );

  // const [products, setProducts] = useState(initialProducts);

  // // CREATE
  // const addProduct = (newProduct) => {
  //   const productWithId = {
  //     ...newProduct,
  //     id: Date.now(),
  //   };
  //   setProducts((prev) => [productWithId, ...prev]);
  // };

  // // UPDATE
  // const updateProduct = (updateProduct) => {
  //   setProducts((prev) =>
  //     prev.map((item) => (item.id === updateProduct.id ? updateProduct : item)),
  //   );
  //   setCart((prev) =>
  //     prev.map((item) =>
  //       item.id === updateProduct.id
  //         ? { ...updateProduct, qty: item.qty }
  //         : item,
  //     ),
  //   );
  // };

  // // DELETE
  // const deleteProduct = (id) => {
  //   setProducts((prev) => prev.filter((item) => item.id !== id));
  //   setCart((prev) => prev.filter((item) => item.id !== id));
  // };

  // // ADMIN
  // const [isAdminView, setIsAdminView] = useState(false);

  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      {/* <Navbar
        totalItems={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
        isAdminView={isAdminView}
        onToggleAdmin={() => setIsAdminView((prev) => !prev)}
      />
      {isAdminView ? (
        <Admin
          products={products}
          onAddProduct={addProduct}
          onUpdateProduct={updateProduct}
          onDeleteProduct={deleteProduct}
        />
      ) : (
        <>
          <Hero />
          <Catalogue products={products} onAddToCart={addToCart} />
          <Information />
        </>
      )}
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
      /> */}
    </Routes>
  );
}

export default App;
