import {BrowserRouter} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import Vehicle from './Pages/Vehicle';
import Mobile from './Pages/Mobile';
import Computer from './Pages/Computer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Menu from './Component/Menu';
import Login from './Pages/Login.jsx';
import ProductUpload from './Pages/ProductUpload';
import SignUp from './Pages/SignUp';
import ProductDetail from './Pages/ProductDetail';
import CheckOut from './Pages/CheckOut';



function App() {
  return(
  <>
  <Switch>
  <Route exact path='/'><Login/></Route>
  <Route  path='/home'><Home/></Route>
  <Route  path='/vehicle'><Vehicle/></Route>
  <Route  path='/mobile'><Mobile/></Route>
  <Route  path='/computer'><Computer/></Route>
  <Route  path='/Product'><Product/></Route>
  <Route  path='/ProductUpload'><ProductUpload/></Route>
  <Route  path='/login'><Login/></Route>
  <Route  path='/signup'><SignUp/></Route>
  <Route  path='/ProductDetail'><ProductDetail/></Route>
  <Route  path='/checkout'><CheckOut/></Route>
  

  </Switch>
  </> )
  }
export default App;
