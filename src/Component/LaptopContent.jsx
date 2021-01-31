import ProductBox from '../ProductBox';
import {useProduct} from '../Context/Product';
//import { propTypes } from 'react-bootstrap/esm/Image';
const LaptopContent = () => {

    const {product} = useProduct();
    
    return (
        <>
        <div id='contentArea'>

        {/* {product.map((product, index) => 

        <ProductBox name = {product.proName} price = {product.proPrice} 
        description={product.proDescription}
        model = {product.proModel}
        brand = {product.proBrand}
        category = {product.proCategory} 
        pic={product.proImage}/>
        )}
 */}

        {
        product.filter(product => product.proCategory == 'Laptop').map(filterCategory =>(
        <ProductBox name = {filterCategory.proName} price = {filterCategory.proPrice} 
                description={filterCategory.proDescription}
                model = {filterCategory.proModel}
                brand = {filterCategory.proBrand}
                category = {filterCategory.proCategory} 
                pic={filterCategory.proImage}/>
            
        ))}

        </div>
        </>
    )
    }
  export default LaptopContent;