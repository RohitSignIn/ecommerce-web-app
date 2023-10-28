import { useState, useEffect, useContext } from "react";
import axios from "axios";
import cartContext from "../Context/cartContext";
import { useCookies } from "react-cookie";

const ProductDetails = ({ prd }) => {
  const [cookies, setCookie] = useCookies();

  const [prdDetail, setDetail] = useState(null);
  const [added, setAdded] = useState(false);

  async function getProductDetail() {
    const prdData = await axios.get(`https://localhost:8765/products/${prd}`);

    setDetail(() => prdData.data);
  }

  const { cart, setCart } = useContext(cartContext);

  function addToCart() {
    if (cookies.auth) {
      setCart([{ productId: prd, quantity: 1 }, ...cart]);
      setAdded(true);
    }
  }

  function removeFromCart() {
    if (cookies.auth) {
      const updatedCart = cart.filter((cartPrd) => cartPrd.productId != prd);
      setCart(updatedCart);
      setAdded(false);
    }
  }

  useEffect(() => {
    getProductDetail();
    cart.forEach((cartPrd, idx) => {
      if (cartPrd.productId == prd) {
        setAdded(true); // Product has been added
        return;
      }
    });
  }, []);

  return (
    <>
      <div id='product-detail'>
        {prdDetail && (
          <div key={prdDetail.id} id='detail'>
            <div>
              <div>
                <img src={prdDetail.image} alt={prdDetail.title} />
              </div>
              <div>
                {added ? (
                  <button onClick={removeFromCart}>Remove from cart</button>
                ) : (
                  <button onClick={addToCart}>
                    <svg
                      className='_1KOMV2'
                      width='16'
                      height='16'
                      viewBox='0 0 16 15'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        className=''
                        d='M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86'
                      ></path>
                    </svg>{" "}
                    ADD TO CART
                  </button>
                )}

                <button>
                  <svg
                    fill='#000000'
                    width='16'
                    height='16'
                    viewBox='0 0 512 512'
                    id='Wallet'
                    version='1.1'
                  >
                    <path d='M452.2,244.769h-27.745v-18.057c0-20.674-16.76-37.434-37.435-37.434h-14.093v-35.232c0-20.675-16.76-37.435-37.435-37.435  h-3.773V84.903H274.9V71.691H92.836v44.92h-7.272c-0.621,0-1.255,0.013-1.876,0.053c-9.288,0.462-17.651,4.426-23.821,10.583  c-6.157,6.17-10.121,14.533-10.583,23.821l-0.053,1.876v259.631c0,15.316,12.416,27.732,27.732,27.732h319.76  c15.316,0,27.732-12.416,27.732-27.732v-80.607h18.496c10.946,0,19.818-8.873,19.818-19.818v-52.848v-3.964  C462.77,249.501,458.038,244.769,452.2,244.769z M295.168,102.075c0.387,6.246,3.535,11.732,8.226,15.293  c0.139,0.105,0.273,0.215,0.414,0.317c0.294,0.212,0.599,0.409,0.903,0.605c0.189,0.122,0.377,0.246,0.57,0.362  c0.287,0.172,0.581,0.333,0.877,0.492c0.229,0.123,0.46,0.243,0.694,0.358c0.279,0.137,0.563,0.267,0.85,0.391  c0.268,0.117,0.54,0.225,0.814,0.331c0.27,0.104,0.539,0.206,0.814,0.299c0.313,0.105,0.63,0.197,0.949,0.288  c0.252,0.071,0.501,0.147,0.757,0.209c0.378,0.092,0.762,0.165,1.147,0.235c0.209,0.039,0.414,0.086,0.626,0.119  c0.604,0.092,1.214,0.163,1.834,0.202v67.703H274.9v-87.203H295.168z M109.9,107.644c10.008-0.9,17.976-8.88,18.876-18.888h20.868  h89.304c0.058,0.644,0.147,1.277,0.263,1.903c0.027,0.151,0.07,0.297,0.102,0.447c0.099,0.476,0.202,0.949,0.332,1.412  c0.039,0.137,0.089,0.268,0.131,0.403c0.144,0.474,0.295,0.943,0.471,1.401c0.039,0.103,0.087,0.201,0.128,0.303  c0.195,0.487,0.404,0.968,0.635,1.436c0.032,0.065,0.069,0.128,0.102,0.192c0.254,0.501,0.524,0.992,0.816,1.469  c0.019,0.031,0.04,0.061,0.059,0.091c0.313,0.507,0.647,0.998,1.002,1.475c0.006,0.007,0.012,0.014,0.017,0.021  c3.451,4.627,8.763,7.788,14.832,8.333v81.635h-39.831c0-18.854-15.284-34.139-34.139-34.139s-34.139,15.284-34.139,34.139H109.9  v-72.667V107.644z M412.455,412.576c0,8.675-7.058,15.732-15.732,15.732H76.963c-8.675,0-15.732-7.058-15.732-15.732V194.695  c7.151,4.185,15.466,6.583,24.333,6.583h301.457c14.024,0,25.435,11.41,25.435,25.434v32.59h-44.813  c-9.486,0-17.176,7.689-17.176,17.176v38.314c0,9.486,7.689,17.176,17.176,17.176h44.813V412.576z M391.424,296.297  c0,5.107-4.141,9.248-9.248,9.248s-9.248-4.141-9.248-9.248c0-5.108,4.141-9.249,9.248-9.249S391.424,291.188,391.424,296.297z' />
                  </svg>{" "}
                  BUY NOW
                </button>
              </div>
            </div>

            <div>
              <h1>{prdDetail.title}</h1>
              <p>{prdDetail.price} &#x0024;</p>
              <h4>{prdDetail.description}</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
