import {NavLink} from 'react-router-dom';
import Home from '../Pages/Home';

const Menu = () =>{
    return(
        <>
        <NavLink  exact  to="/" ></NavLink >
        <NavLink   className='Menu'  to="/home" >Home</NavLink >
        <NavLink   className='Menu'  to="/vehicle">Vehicle</NavLink >
        <NavLink   className='Menu'  to="/mobile">Mobile</NavLink >
        <NavLink   className='Menu'  to="/computer">Computer</NavLink >
        <NavLink   className='Menu'  to="/product">Product</NavLink >
        <NavLink   className='Menu'  to="/ProductUpload">Product Upload</NavLink >
        
        </>
    )
}

export default Menu;