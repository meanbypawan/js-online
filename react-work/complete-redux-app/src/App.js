import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/shop/Shop';
import ProductDescription from './components/product-description/ProductDescription';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/singup/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import ViewCart from './components/cart/ViewCart';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product-description" element={<ProductDescription/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/view-cart' element={<ProtectedRoute><ViewCart/></ProtectedRoute>}/>
    </Routes>
  </>
}

export default App;
