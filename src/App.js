import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/womens_banner.png';
import men_banner from './Components/Assets/mens_banner.png';
import kids_banner from './Components/Assets/kids_banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/womens'element={<ShopCategory banner= {women_banner} category="women"/>}/>
        <Route path='/mens'element={<ShopCategory banner= {men_banner}category="men"/>}/>
        <Route path='/kids'element={<ShopCategory banner= {kids_banner}category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path =':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login'element={<LoginSignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>

    </div>
  );
}
export default App;
