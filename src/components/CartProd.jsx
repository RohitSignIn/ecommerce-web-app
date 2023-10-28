import React from "react";
import { useContext } from "react";
import cartContext from "../Context/cartContext";

export default function CartProd(props) {
  const { cart, setCart } = useContext(cartContext);

  function removeFromCart() {
    const updatedCart = cart.filter((prd) => prd.productId != props.id);
    setCart(updatedCart);
  }

  return (
    <>
      <div className='cart_product'>
        <div>
          <div>
            <img src={props.image} alt={props.title} />
          </div>
          <div>
            <p>{props.title}</p>
            <p>{props.rating.rate}</p>
            <p>{props.price} $</p>
          </div>
        </div>

        <div>
          <div className='cart_prod_qunt'>
            <button>-</button>
            <p>{props.quantity}</p>
            <button>+</button>
          </div>
          <div>
            <button onClick={removeFromCart}>REMOVE</button>
          </div>
        </div>
      </div>
    </>
  );
}
