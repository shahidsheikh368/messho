// import React from "react";

// export default function Cart() {
//   return (
//     <>
      
//     </>
//   );
// }


// import React, { useContext } from "react";
// import { Data } from "../ContextData";

// export default function Cart() {
//   const { cartItems } = useContext(Data);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>🛒 Cart Page</h1>
//       {cartItems.length === 0 ? (
//         <p>No items in cart yet.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} style={{ marginBottom: "10px", borderBottom: "1px solid gray" }}>
//             <h3>{item.name}</h3>
//             <p>₹{item.price}</p>
//             <img src={item.image} alt={item.name} width="100" />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import React, { useContext } from "react";
import { Data } from "../ContextData";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(Data);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
      {/* Left Side: Cart Items */}
      <div style={{ flex: 2 }}>
        <h2 style={{ marginBottom: "1rem" }}>🛒 Your Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderBottom: "1px solid #ccc",
                padding: "1rem 0",
              }}
            >
              <img src={item.image} alt={item.name} width="80" />
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <p>Rating: {item.rating}⭐</p>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "0.3rem 0.6rem",
                  background: "#ff4d4d",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Right Side: Summary */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "1rem",
          height: "fit-content",
        }}
      >
        <h3>Order Summary</h3>
        <p>Items: {cartItems.length}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            background: "#ff3e6c",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
