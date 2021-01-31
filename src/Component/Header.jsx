import '../Component/style.css';
import Menu from '../Component/Menu.jsx';
import sell from '../Images/sell.PNG';
import { useHistory } from "react-router-dom";

import { Button, Form,Select } from 'react-bootstrap';
const Header = () =>{
    let history = useHistory();

     function goLogin() {
        history.push("/login");
     }
     function goSell() {
        history.push("/productupload");
     }
return(
    <div>
        <div className="Header">
            <div className="Logo">
            <h1>OLX</h1>
            </div>

            <div className='HeaderSearch'>

                    <Form.Control as="select" className='w-50 h-75 mr-3 border-info'>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    </Form.Control>

            <input className="form-control w-100 h-75 border-dark" type="text" placeholder="Search" 
             aria-label="Search"  />
             <button type="button" class="btn btn-dark h-75 ml-1 mr-5" >Search</button>
            </div>
            
            <div className='LoginButton ml-10 mr-3'>
                <h3 id='LoginBtn' onClick={goLogin} >Login</h3>
            </div>
            <div className='SellButton'>
                <img src={sell} onClick={goSell} className='h-80 ' />
            </div>

        </div>
        <div className='nav'>
            <Menu/>
        </div>
    </div>
)
}

export default Header;