import { useEffect, useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ catg }) => {
  const { setProducts, filterProd, setFilterProd } = useContext(ProductContext);
  //    const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    let allProducts;
    if (catg) {
      allProducts = await axios.get(
        `https://localhost:8765/products/category/${catg}`
      );
    } else {
      allProducts = await axios.get("https://localhost:8765/products", {
        withCredentials: true,
      });
    }
    setProducts(() => allProducts.data);
    setFilterProd(() => allProducts.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [catg]);

  return (
    <div id='product-con'>
      <div id='products'>
        {filterProd &&
          filterProd.map((data, idx) => {
            return (
              <div key={idx} className='product'>
                <Link to={`/product-details/${data.id}`}>
                  <div>
                    <img loading='lazy' src={data.image} alt={data.title} />
                  </div>
                  <div>
                    <p>{data.title.substring(0, 20)}...</p>
                    <p>Shop Now!</p>
                    <button>{data.price} &#x0024;</button>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
