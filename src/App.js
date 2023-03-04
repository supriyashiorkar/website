

import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import './App.css';
import AboutPage from './CollegeWebsite/AboutPage';
import BlogPage from './CollegeWebsite/BlogPage';
import ContactPage from './CollegeWebsite/ContactPage';
import CoursePage from './CollegeWebsite/CoursePage';
import HomePage from './CollegeWebsite/HomePage';
import EcomBtstrp from './EcomBootstrap/EcomBtstrp';
import AccountEcom from './ECommerce/AccountEcom';
import CartEcom from './ECommerce/CartEcom';
import EComWeb from './ECommerce/ECommweb';
import ProductDetails from './ECommerce/ProductDetails';
import ProductsEcom from './ECommerce/ProductsEcom';
import GridP from './Grid/GridP';
import Header from './Header';
import Website from './project/Website';
import LCalculator from './Thapa/LCalculator';
import Website3 from './website3/Website3';
import Website4 from './website4/Website4';

function App() {
  return (
 <div className="App">

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Header/>}>
<Route path='/hmpg' element={<HomePage/>}></Route>
<Route path='/wbst' element={<Website/>}></Route>
<Route path='/wbst3' element={<Website3/>}></Route>
<Route path='/wbst4' element={<Website4/>}></Route>
<Route path='/abt' element={<AboutPage/>}></Route>
<Route path='/blg' element={<BlogPage/>}></Route>
<Route path='/cnct' element={<ContactPage/>}></Route>
<Route path='/crse' element={<CoursePage/>}></Route>
<Route path='/grdp' element={<GridP/>}></Route>
<Route path='/lcalci' element={<LCalculator/>}></Route>
<Route path='/ecomweb' element={<EComWeb/>}></Route>
<Route path='/prEcom' element={<ProductsEcom/>}></Route>
<Route path='/prEcomdtl' element={<ProductDetails/>}></Route>
<Route path='/cartEcom' element={<CartEcom/>}></Route>
<Route path='/accntEcom' element={<AccountEcom/>}></Route>
<Route path='/Ecombtstp' element={<EcomBtstrp/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
