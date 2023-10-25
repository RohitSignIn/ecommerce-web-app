import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart/Cart";

function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:catg' element={<Category />} />
            <Route path='/product-details/:prd' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default MainRoutes;
