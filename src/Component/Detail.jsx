import ProductBox from '../ProductBox';
import {useProduct} from '../Context/Product';
import {useHistory} from 'react-router-dom'

const Detail = (props) => {
    const myProps = props
    const {product} = useProduct();
    const history = useHistory();

    return (
        <>
    <div id='DetailDiv'>
        <div className="ProductAreaBox">
            <div className="productImgDiv">
                <img src={props.pic} style={{width:'100%', height:'100%' }} />
            </div>
        </div>
        <div className="ProductAreaBox">
        <br />
        <br />
        <h2>{props.name}</h2>
        <br />
        <h2>{props.brand}</h2>
        <br />
        <h2>{props.model}</h2>
        <br />
            <h4>{props.price}PKR</h4>
        <br />
    <p>{props.description}</p>
        <br />

        <button className='btn btn-success w-50' 
                    onClick={()=>{
                        history.push('/CheckOut',{myProps})
                    }}>Place Order</button>
        </div>
   
    </div>
        </>
    )
    }
  export default Detail;