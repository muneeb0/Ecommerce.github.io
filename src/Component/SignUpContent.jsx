import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Form,Select } from 'react-bootstrap';
import {useState} from 'react'
import firebaseConfig from'../DB/Firebase';
 import firebase from'../DB/Firebase';
 import { auth } from 'firebase';
function SignUpContent() {

    let [users,setUser] = useState([])

    let [email,setEmail] = useState('')
    let [name,setName] = useState('')
    let [password,setPassword] = useState('')
    let [ConfirmPassword,setCPass] = useState('')
    let [contact,setContact] = useState('')
    let [city,setCity] = useState('')
    

    
        let user = {
            email:'',
            name:'',
            password:'',
            confirmPassword:'',
            contact:'',
            city:'',
            key:''
        }

    const OnSubmit = () =>{
         let newArr = {...user}
        // setUser(users.push(newArr))
         console.log(newArr)

        var id = 1 ;
        ++id;
        let key =  firebase.database().ref(`userData`).push().key
        user = {
            email:email,
            name:name,
            password:password,
            confirmPassword:ConfirmPassword,
            contact:contact,
            city:city,
            key:key
        }
        firebase.database().ref(`userData/`+key).set(user)

    }

    return (
        <>
        <div id='contentAreaUpload'>
            <h1 style={{ marginTop:'15px',marignBottom:'30px'}}>Product Upload Page</h1>
            <div style={{width:'70%',margin:'0 auto'}}>
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
                    <td>Password</td>
                    <td><Form.Control type='password' onChange={(event)=>{
                        setPassword(password=event.target.value) }} /> 
                        </td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td><Form.Control type='password'onChange={(event)=>{
                        setCPass(ConfirmPassword=event.target.value) }} /> 
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
                    >SignUp</button> </td>
                </tr>
            </table>
            </div>
        </div>
        </>
    )
    }
  export default  SignUpContent;