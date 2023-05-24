import logo from './logo.svg';
import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/categories/Category';
import Brand from './components/brands/Brand';
import Product from './components/products/Product';

function App() {
 return <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categories' element={<Category/>}/>
      <Route path='/brands' element={<Brand/>}/>
      <Route path='/products' element={<Product/>}/>
    </Routes>
 </>
}

export default App;
