import Button from "./button";
import { amount } from "../../lib/utils";
import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemove,
  totalPrice,
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 flex justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-brand-500 border-l border-brand-600 h-full flex flex-col justify-between p-6"
      >
        <div className="flex items-center justify-between border-b border-brand-600 pb-4">
          <h2 className="font-bold">KERJANJANG BELANJA</h2>
          <Button onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          {cart.length === 0
            ? "Keranjang masih kosong"
            : cart.map((item) => (
                <div
                  key={item.id}
                  className="flex bg-brand-400 gap-2 justify-between border border-brand-600 p-4"
                >
                  <div className="flex flex-col">
                    <span className="text-brand-900 font-bold">
                      {item.name}
                    </span>
                    <span className="font-bold">{amount(item.price)}</span>
                  </div>
                  <div className="flex items-center">
                    <Button onClick={() => onUpdateQty(item.id, -1)}>
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-bold tabular-nums shrink-0">
                      {item.qty}
                    </span>
                    <Button onClick={() => onUpdateQty(item.id, 1)}>
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button onClick={() => onRemove(item.id)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
        </div>
        <div className=" flex justify-between border-t border-brand-600 pt-4">
          <span className="font-bold">TOTAL</span>
          <span className="font-bold">{amount(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
}
