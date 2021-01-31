import Menu from '../Component/UploadContent';
import Footer from '../Component/Footer';
import Detail from '../Component/Detail';
import Header from '../Component/Header.jsx';
import {useProduct} from '../Context/Product';
import {  useLocation } from 'react-router-dom'


function ProductDetail(props) {
    //const params = useParams();
    const location = useLocation();
    console.log('checkout'+" "+location.state.name)
    return (
        <>
        <Header/>
        <Detail 
        name = {location.state.name} 
        price = {location.state.price} 
        description={location.state.description}
        model = {location.state.model}
        brand = {location.state.brand}
        category = {location.state.category} 
        pic={location.state.pic} />
        <Footer/>
        </>
    )
    }
  export default  ProductDetail;