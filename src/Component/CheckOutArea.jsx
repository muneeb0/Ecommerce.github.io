import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Form,Select } from 'react-bootstrap';
import {useState} from 'react'
import firebaseConfig from'../DB/Firebase';
 import firebase from'../DB/Firebase';
 import { auth } from 'firebase';
import { useLocation } from 'react-router-dom'

function CheckOutArea() {


    const location = useLocation();
    console.log(location.state.myProps)

    let [users,setUser] = useState([])

    let [email,setEmail] = useState('')
    let [name,setName] = useState('')
    let [contact,setContact] = useState('')
    let [city,setCity] = useState('')
    
    const user = {
        email:'',
        name:'',
        contact:'',
        city:''
    }

    

    const OnSubmit = () =>{
         let newArr = {...user}
        // setUser(users.push(newArr))
         console.log(newArr)

        var id = 1 ;
        ++id;
        let key =  firebase.database().ref(`Order`).push().key
        user = {
            email:email,
            name:name,
            contact:contact,
            city:city,
            key:key
        }
        firebase.database().ref(`Order/`+key).set(user)

    }

    return (
        <>
            <div id='checkOutProduct'>
               <div className="CheckOutproBox">
                   <div className='CheckOutproductImage'>
                   <img src={location.state.myProps.pic} alt ={location.state.myProps.name} style={{height:'350px', width:'90%'}}/>
                   </div>
                   <div className="CheckOutproBoxText">
                   <h3 style={{ color:'grey',margin:' 15 0 20 0'}}>{location.state.myProps.name}<br/>
                    {location.state.myProps.price}
                    </h3>
                   </div>
               </div>
            </div>
            <div id='checkOutDiv'>
            <h1 style={{ marginTop:'15px',marignBottom:'30px'}}>Check Out Page</h1>
            <div style={{width:'95%',margin:'0 auto'}}>
            <table className='table table-bordered '>
            <tr>
                    <td>User Email</td>
                    <td><Form.Control type='text' onChange={(event)=>{
                        setEmail(email=event.target.value) }} 
                    /> </td>
                </tr>
                <tr>
                    <td>User Name</td>
                    <td><Form.Control type='text' onChange={(event)=>{
                        setName(name=event.target.value) }} 
                        />
                             </td>
                </tr>

                <tr>
                    <td>Contact No</td>
                    <td><Form.Control type='text'onChange={(event)=>{
                        setContact(contact=event.target.value) }} 
                        /> </td>
                </tr>
                <tr> 
                    <td>City</td>
                    <td>
                    <Form.Control as="select" className='w-50 h-75 mr-3 border-info' onChange={(event)=>{
                        setCity(city=event.target.value) }} >
                    <option value='Karachi'>Karachi</option>
                    <option value='Lahore'>Lahore</option>
                    <option value='Islamabad'>Islamabad</option>
                    </Form.Control>
                    </td>
                    </tr>

                <tr>
                    <td></td>
                    <td ><button className='btn btn-success w-50' 
                    onClick={OnSubmit}
                    >Buy Now</button> </td>
                </tr>
            </table>
            </div>
        </div>
        </>
    )
    }
  export default  CheckOutArea;