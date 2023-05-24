import Footer from "./Footer";
import Headers from "./Header";

export default function Home(){
    return <>
      <Headers/>
      <div className="container-fluid">
        <div className="tm-main">
            <h1>Home Component...</h1>
            <Footer/>
        </div>
      </div>
    </>
}