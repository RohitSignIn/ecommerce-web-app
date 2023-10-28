import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Category = () => {
  const [category, setCategory] = useState(null);
  async function loadCategories() {
    const categories = await axios.get(
      "https://localhost:8765/products/categories"
    );

    setCategory(() => categories.data);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div id='categories-con'>
      <div id='category'>
        {category &&
          category.map((data, idx) => {
            return (
              <div key={idx} id={data}>
                <Link to={`/category/${data}`}>
                  <LazyLoadImage
                    src={`../categories/${data}.webp`}
                    alt={data}
                    effect='opacity'
                  />

                  <p>{data}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
