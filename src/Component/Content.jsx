import ProductBox from '../ProductBox';
import {useProduct} from '../Context/Product';
//import { propTypes } from 'react-bootstrap/esm/Image';
const Content = () => {

    const {product} = useProduct();
    
    return (
        <>
        <div id='contentArea'>
        {product.map((product, index) => 
        <ProductBox name = {product.proName} price = {product.proPrice} 
        description={product.proDescription}
        model = {product.proModel}
        brand = {product.proBrand}
        category = {product.proCategory} 
        pic={product.proImage}/>)}
        </div>
        </>
    )
    }
  export default Content;