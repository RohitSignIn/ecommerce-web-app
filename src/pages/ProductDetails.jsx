import { useParams } from 'react-router-dom'
import ProductDtl from '../components/ProductDetails'

const ProductDetails = () => {

    const {prd} = useParams();

  return (
    <>
        <ProductDtl prd={prd}  />
    </>
  )
}

export default ProductDetails