import { useContext } from "react";
import { ShopContext } from "../../Context/Context";

function CartItem({ item }) {
  const { setAddToCart, addToCart } = useContext(ShopContext);

  const handleQuantityChange = (id, newQuantity) => {
    setAddToCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  const handleRemoveItem = (id) => {
    setAddToCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <tr key={item.id} className="border-b">
      <td className="py-2 flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        {item.name}
      </td>
      <td className="py-2">${item.price}</td>
      <td className="py-2">
        <select
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[...Array(10).keys()].map((q) => (
            <option key={q + 1} value={q + 1}>
              {q + 1}
            </option>
          ))}
        </select>
      </td>
      <td className="py-2">${item.price * item.quantity}</td>
      <td className="py-2">
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="text-red-500"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
