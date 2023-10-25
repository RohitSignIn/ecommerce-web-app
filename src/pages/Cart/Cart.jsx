import CartProd from "../../components/CartProd";
import { useCookies } from "react-cookie";
import "./style/Cart.css";
import { useNavigate } from "react-router-dom";
import { prdbyPrdId } from "../../APIs/api";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import cartContext from "../../Context/cartContext";
import CartPricedtl from "../../components/CartPricedtl";

export default function Cart() {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  if (!cookies.auth) navigate("/");

  const { cart } = useContext(cartContext);

  const [products, setProducts] = useState([]);

  async function getCartDetails() {
    try {
      const res = await axios.all(
        cart.map(async (prd) => {
          let res = await axios.get(`${prdbyPrdId}${prd.productId}`, {
            withcredentials: true,
          });
          return { ...res.data, quantity: prd.quantity };
        })
      );
      setProducts(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCartDetails();
  }, [cart]);

  console.log(products);

  return (
    <>
      <div id='cart'>
        {products.length > 0 && (
          <div id='cart_product_con'>
            {products.map((prd) => {
              return (
                <CartProd
                  key={prd.id}
                  id={prd.id}
                  image={prd.image}
                  title={prd.title}
                  quantity={prd.quantity}
                  price={prd.price}
                  rating={prd.rating}
                />
              );
            })}
            <div id='cart_place_order'>
              <div>
                <button>PLACE ORDER</button>
              </div>
            </div>
          </div>
        )}

        {cart.length == 0 && (
          <div id='emptyCart'>
            <div>
              <img width={300} src='emptyCart.webp' alt='' />
            </div>
            <div>
              <p>Your Cart is Empty</p>
            </div>
          </div>
        )}

        {/* Side Cart Price Total Details START ---------------------  */}
        {products.length > 0 && (
          <div id='cart_price_details'>
            <div className='cart_heading'>
              <span>PRICE DETAILS</span>
            </div>
            <CartPricedtl products={products} />
          </div>
        )}
        {/* Side Cart Price Total Details START ---------------------  */}
      </div>
    </>
  );
}
