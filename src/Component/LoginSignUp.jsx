import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Form,Select } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {useState} from 'react'
import firebaseConfig from'../DB/Firebase';
 import firebase from'../DB/Firebase';
 import { auth } from 'firebase';
function LoginSignUp() {

    let history = useHistory();
    let [users,setUser] = useState([])
    let [userEmail,setUserEmail] = useState('')
    let [userPassword,setUserPassword] = useState('')
    

    let user = {
        email:'',
        password:''
       
    }

    function goSignUp() {
        history.push("/signup");
    }

    const OnSubmit = () =>{
    
       let data = []
       
      // firebase.database().ref(`userData/`).child(`${newArr.name}`).push(newArr)
      firebase.database().ref('/').child('userData').on('child_added',snap=>{
          data.push( snap.val())
    }) 

    for (let index = 0; index < data.length; index++) {
        if (data[index].email === userEmail && data[index].password === userPassword ) {
            history.push("/home")
        }
        
    }
    console.log(data);
    console.log(userEmail+"  "+userPassword);
    }
  
    
    

    return (
        <>
        <div id='contentAreaUpload'>
            <h1 style={{ marginTop:'15px',marignBottom:'30px'}}>Product Upload Page</h1>
            <div style={{width:'70%',margin:'0 auto'}}>
            <table className='table table-light '>
            <tr>
                    <td>User Email</td>
                    <td><Form.Control type='text' onChange={(event)=>{
                        setUserEmail( userEmail=event.target.value) }}  / > </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><Form.Control type='password' onChange={(event)=>{setUserPassword(
                        userPassword=event.target.value) }}  /> </td>
                </tr>

                <tr>
                    <td></td>
                    <td ><button className='btn btn-success w-50' onClick={OnSubmit}>Login</button> </td>
                </tr>
            </table>
            <span style={{color:'red',marginLeft:'290px'}} onClick={goSignUp}><u>Click Here To SignUp</u></span>
            </div>
        </div>
        </>
    )
    }
  export default  LoginSignUp;