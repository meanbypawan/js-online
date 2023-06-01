import { useDispatch } from "react-redux";
import Banner from "./banner/Banner";
import Category from "./categories/Category";
import FeatureProduct from "./featured-product/FeatureProduct";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { useEffect } from "react";
import { fetchCategory } from "../redux-config/CategorySlice";

export default function Home(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategory());
    },[]);
    return <>
       <Header/>
       <Banner/>
       <Category/>
       <FeatureProduct/> 
       <Footer/>
    </>
}