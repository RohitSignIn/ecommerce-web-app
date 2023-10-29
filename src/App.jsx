import "./App.css";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav";
import ProductContext from "./Context/ProductContext";
import { Suspense, lazy, useState } from "react";
import Auth from "./pages/Authentication/Auth";
import cartContext from "./Context/cartContext";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";
import { cartbyUserId } from "./APIs/api";
const Category = lazy(() => import("./components/Category"));
const MainRoutes = lazy(() => import("./Routes/MainRoutes"));

function App() {
  const [cookies, setCookie] = useCookies();
  const [products, setProducts] = useState(null);
  const [filterProd, setFilterProd] = useState(null);
  const [authPage, setAuthPage] = useState(false);
  const [cart, setCart] = useState([]);

  async function getCart() {
    const cartData = await axios.get(`${cartbyUserId}${cookies.user_id}`, {
      withcredentials: true,
    });
    setCart(cartData.data[0].products);
  }

  useEffect(() => {
    getCart();
  }, [cookies.auth]);

  return (
    <>
      {authPage && authPage == "Login" && <Auth setAuthPage={setAuthPage} />}
      <ProductContext.Provider
        value={{ products, setProducts, filterProd, setFilterProd }}
      >
        <cartContext.Provider value={{ cart, setCart }}>
          <Nav setAuthPage={setAuthPage} />
          <div id='mainCon'>
            <Suspense
              fallback={<Loader h={"122px"} jc={"center"} ai={"center"} />}
            >
              <Category />
            </Suspense>
            <Suspense fallback={<Loader jc={"center"} mt={"2rem"} />}>
              <MainRoutes />
            </Suspense>
          </div>
        </cartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App;
