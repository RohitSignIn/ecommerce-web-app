import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const Category = () => {

  const {catg} = useParams();

  return (
    <>
        <Card catg={catg} />
    </>
  )
}

export default Category