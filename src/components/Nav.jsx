import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import { useCookies } from "react-cookie";
import cartContext from "../Context/cartContext";
import { useState } from "react";
import axios from "axios";
import { logout } from "../APIs/api";

const Nav = ({ setAuthPage }) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const { cart, setCart } = useContext(cartContext);

  const [userOptions, setUserOptions] = useState(false);

  const { products, setFilterProd } = useContext(ProductContext);

  function filterData(e) {
    let value = e.target.value.toLowerCase();
    setFilterProd(
      products.filter((prod) => prod.title.toLowerCase().match(value))
    );
  }

  async function clearCookies() {
    await axios.get(logout, { withCredentials: true });
    setCart();
    setUserOptions(false);
  }

  return (
    <nav>
      <div id='logo'>
        <div>
          <Link to='/'> MyStore </Link>
        </div>
        <div id='search-box'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Search for products, Brands & more'
            onChange={(e) => filterData(e)}
          />
          <div id='search-icon'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
              <path d='M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z' />
            </svg>
          </div>
        </div>
      </div>
      <div id='user-status'>
        {!cookies.auth && (
          <button onClick={() => setAuthPage("Login")}>Login</button>
        )}
        {cookies.auth && (
          <button onClick={() => setUserOptions(!userOptions)}>
            {cookies.username}
          </button>
        )}

        {userOptions && (
          <div id='userOptions'>
            <button onClick={clearCookies}>Logout</button>
          </div>
        )}
      </div>
      <div id='cart_icon'>
        {!cookies.auth && (
          <Link onClick={() => setAuthPage("Login")}>
            <img loading='lazy' src='/cart.png' alt='Cart' />
          </Link>
        )}
        {cookies.auth && (
          <Link to='/cart'>
            <img loading='lazy' src='/cart.png' alt='Cart' />
          </Link>
        )}
        {cart?.length > 0 && <div id='productQuan'>{cart.length}</div>}
      </div>
    </nav>
  );
};

export default Nav;
