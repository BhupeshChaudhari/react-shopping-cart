import React from "react";
import { MdDelete } from "react-icons/md";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

function Cartitem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md mb-8">
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 ml-6">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-sm text-gray-600 mt-2">
          {item.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>
        <div className="mt-4">
          <span className="text-xl font-bold text-green-600">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="ml-6">
        <button
          className="p-2 bg-red-400 text-white rounded-full hover:bg-red-600 transition duration-200 ease-in-out"
          onClick={removeFromCart}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
}

export default Cartitem;
