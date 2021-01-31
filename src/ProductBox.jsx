//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import { Button, Form} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function ProductBox(props) {

    const myProps = props
    console.log(props)
    let history = useHistory();

    return (
        <>
        <div className='proBox'>

            <div className='productImage'>
            <img src={props.pic} class="card-img-top" alt ={props.name} style={{height:'250px', width:'100%'}}/>
            </div>

            <div className="proBoxText">
            <h6 style={{ color:'red',margin:' 15 0 20 0'}}>{props.name}<br/>
            {props.price}
            </h6>
                <button className='btn btn-primary ' onClick={()=>{history.push(`/ProductDetail/${props.name}`,myProps)}}> See Details </button>
            </div>
        </div>
        </>
    )
    }
  export default  ProductBox;