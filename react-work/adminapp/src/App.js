import logo from './logo.svg';
import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/categories/Category';
import Brand from './components/brands/Brand';
import Product from './components/products/Product';
import { useEffect, useState } from 'react';
import MasterContext from './context/MasterContext';
import axios from 'axios';
import ProductContext from './context/ProductContext';
import api from './api/webApi';
function App() {
 const [categoryList,setCategoryList] = useState([]);
 const [brand,setBrandList] = useState([]);
 const [productList,setProductList] = useState([]);

 useEffect(()=>{
  loadCategories();
  loadBrands();
  loadProducts();
 },[]);

 const loadBrands = async()=>{
  try{
     let response = await axios.get(api.LOAD_BRAND);
     if(response.data.status)
       setBrandList(response.data.brandList);
  }
  catch(err){
      console.log(err);
  }
 }
 
 const loadCategories = async()=>{
  try{  
    let response = await axios.get(api.LOAD_CATEGORY);
    if(response.data.status)
      setCategoryList(response.data.result);
  }
  catch(e){
    console.log(e);
  }  
 } 

 const loadProducts = async () => {
  try {
      let response = await axios.get(api.LOAD_PRODUCT);
      if (response.data.status)
          setProductList(response.data.result);
  }
  catch (err) {
      console.log(err);
  }
}
const deleteCategory = (id)=>{
   let index =  categoryList.findIndex((category)=>category._id == id);
   window.alert(index);
   let copyOfCategoryList = categoryList;
   console.log(copyOfCategoryList.length);
   copyOfCategoryList.splice(index,1);
   console.log(copyOfCategoryList.length);
   setCategoryList(copyOfCategoryList);
   window.alert("category delete...");
}
 return <>
   <MasterContext.Provider value={{categoryList: categoryList,brandList:brand}}>
     <ProductContext.Provider value={{productList: productList}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Category setCategoryList={setCategoryList} deleteCategory={deleteCategory}/>}/>
        <Route path='/brands' element={<Brand/>}/>
        <Route path='/products' element={<Product/>}/>
        </Routes>
     </ProductContext.Provider>
    </MasterContext.Provider>
 </>
}

export default App;
