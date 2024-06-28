import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../components/Cartitem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-8">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {cart.map((item, index) => (
              <Cartitem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-6">
              <div className="text-2xl font-semibold">Your Cart</div>
              <div className="text-xl">Summary</div>
              <p className="mt-4">
                <span className="font-medium">Total Items : {cart.length}</span>
              </p>
            </div>
            <p className="text-lg mb-6">
              Total Amount :
              <span className="font-bold"> ${totalAmount.toFixed(2)}</span>
            </p>
            <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-200 ease-in-out">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Cart Empty</h1>
          <NavLink to="/">
            <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
