import Button from "./ui/button";
import { useStore } from "../context/StoreContext";
import { useState } from "react";

export default function () {
  const { products, addProduct, updateProduct, deleteProduct, resetProducts } =
    useStore();

  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    category: "KEYBOARD",
    price: "",
    tags: "",
    image: "",
    desc: "",
  });

  const [editingProduct, setEditingProduct] = useState(null);

  const resetForm = () => {
    setEditingProduct(null);
    setFormData({
      sku: "",
      name: "",
      category: "KEYBOARD",
      price: "",
      tags: "",
      image: "",
      desc: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setFormData({
      sku: product.sku || "",
      name: product.name || "",
      category: product.category || "KEYBOARD",
      price: product.price ?? "",
      tags: Array.isArray(product.tags) ? product.tags.join(", ") : "",
      image: product.image || "",
      desc: product.desc || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.price) return;

    const parsedTags = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        sku: formData.sku.trim() || editingProduct.sku,
        name: formData.name.trim(),
        category: formData.category,
        price: Number(formData.price),
        tags: parsedTags,
        image:
          formData.image.trim() ||
          editingProduct.image ||
          "https://placehold.co/600x400?text=Keyboard",
        desc: formData.desc.trim(),
      });
    } else {
      addProduct({
        sku: formData.sku.trim() || `RK-${Date.now().toString().slice(-4)}`,
        name: formData.name.trim(),
        category: formData.category,
        price: Number(formData.price),
        tags: parsedTags,
        sold: 0,
        image:
          formData.image.trim() || "https://placehold.co/600x400?text=Keyboard",
        desc: formData.desc.trim(),
        specs: {},
      });
    }

    resetForm();
  };
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      {/* HEADER */}
      <div className="border-b border-brand-600 pb-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold">
            <span className="text-brand-900">//</span> DASHBOARD ADMIN
          </h2>
          <p className="text-sm text-brand-700 mt-1">
            Kelola katalog produk RUMAH KEYBOARD ({products.length} item)
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border border-brand-600 p-6 mb-8 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <h3 className="md:col-span-2 text-lg font-bold border-b border-brand-600/50 pb-2">
          {editingProduct
            ? `EDIT PRODUK: ${editingProduct.name}`
            : "+ TAMBAH PRODUK BARU"}
        </h3>

        <div>
          <label className="block text-xs uppercase mb-1">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            placeholder="Contoh: RK-KB-09"
            className="w-full border border-brand-600 bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase mb-1">Nama Produk *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Contoh: Keychron Q1 Pro"
            className="w-full border border-brand-600 bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase mb-1">Kategori</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-brand-600 bg-brand-500 px-3 py-2 text-sm"
          >
            <option value="KEYBOARD">KEYBOARD</option>
            <option value="SWITCH">SWITCH</option>
            <option value="ACCESORIES">ACCESORIES</option>
            <option value="KEYCAPS">KEYCAPS</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase mb-1">Harga (Rp) *</label>
          <input
            type="number"
            name="price"
            required
            min="0"
            value={formData.price}
            onChange={handleChange}
            placeholder="Contoh: 2450000"
            className="w-full border border-brand-600 bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase mb-1">
            Tags (pisahkan koma)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Contoh: wireless, 75%, aluminum"
            className="w-full border border-brand-600 bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase mb-1">URL Gambar</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full border border-brand-600 bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs uppercase mb-1">Deskripsi</label>
          <textarea
            name="desc"
            rows="2"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Deskripsi singkat produk..."
            className="w-full border border-brand-600 bg-transparent px-3 py-2 text-sm"
          />
        </div>

        <div className="md:col-span-2 flex justify-end gap-2">
          {editingProduct && (
            <Button type="button" onClick={resetProducts}>
              BATAL
            </Button>
          )}
          <Button type="submit" className="primary">
            {editingProduct ? "UPDATE PRODUK" : "SIMPAN PRODUK"}
          </Button>
        </div>
      </form>

      {/* TABEL DAFTAR PRODUK (READ + DELETE) */}
      <div className="overflow-x-auto border border-brand-600 rounded-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-600/30 border-b border-brand-600 text-xs uppercase tracking-wider">
              <th className="p-4">SKU</th>
              <th className="p-4">Produk</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Harga</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-600/50 text-sm">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-brand-600/10">
                <td className="p-4 font-mono text-xs">{item.sku}</td>
                <td className="p-4 font-bold">{item.name}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">
                  Rp {Number(item.price).toLocaleString("id-ID")}
                </td>
                <td className="p-4 flex justify-end gap-2">
                  <Button type="button" onClick={() => handleEditClick(item)}>
                    EDIT
                  </Button>
                  <Button type="button" onClick={() => deleteProduct(item.id)}>
                    HAPUS
                  </Button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-brand-700">
                  Belum ada produk di katalog.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
