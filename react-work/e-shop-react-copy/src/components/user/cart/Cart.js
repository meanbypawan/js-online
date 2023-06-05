import { useDispatch, useSelector } from "react-redux";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Navigation from "../../navigation/Navigation";
import { updateQuantity } from "../../../redux-config/CartSlice";
import Modal from "react-modal";
import { useState } from "react";
function Cart() {
  const { cartItems, totalBillAmount } = useSelector(state => state.cart);
  const { open, setOpen } = useState(false);
  const dispath = useDispatch();
  const decrementQunatity = (index)=>{
    let qtyObj = document.getElementById("qty"+index);
    let qty = qtyObj.innerText*1;
    if(qty >=1){
      --qty;
      dispath(updateQuantity({index:index,qty: qty}));
      qtyObj.innerText = ""+qty;
    }
  }
  const incrementQuantity = (index)=>{
    let qtyObj = document.getElementById("qty"+index);
    let qty = qtyObj.innerText*1;
    ++qty;
    dispath(updateQuantity({index:index,qty: qty}));
    qtyObj.innerText = ""+qty;
  }
  
  return <>
    <Header />
    <Navigation />
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => <tr key={index} className="mt-2 mb-2 my-auto">
                <td>{index + 1}</td>
                <td>{item.productId.title.substring(0, 25)}</td>
                <td>{item.productId.brand}</td>
                <td>{item.productId.price}</td>
                <td>
                  <div className="row">
                    <button onClick={(event)=>decrementQunatity(index)} className="font-weight-bold" style={{ fontSize: '20px', width: '30px', height: '30px', backgroundColor: '#ffd438', border: 'none' }}>-</button>
                    <div id={"qty"+index} className="text-center" style={{ fontSize: '20px', width: '30px', height: '30px', backgroundColor: '#f3ecec', border: 'none' }}>{item.productId.qty}</div>
                    <button onClick={(event)=>incrementQuantity(index)} className="font-weight-bold" style={{ fontSize: '20px', width: '30px', height: '30px', backgroundColor: '#ffd438', border: 'none' }}>+</button>
                  </div>
                </td>
                <td>{item.productId.total}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <div className="col-md-4 offset-1">
          <h3>Cart summery------</h3>
          <div style={{width:'100%',boxShadow: '-10px 10px 30px grey'}} className="mt-3 p-2">
            <div className="row ml-3 mr-3" style={{fontSize: '20px'}}>
              <div className="col-md-7 font-weight-bold mt-3">
                <p>Amount</p>
              </div>
              <div className="col-md-5 font-weight-bold mt-3">
                <p>Rs. {totalBillAmount}</p>
              </div>
            </div>
            <div className="row ml-3 mr-3" style={{fontSize: '20px'}}>
              <div className="col-md-7 font-weight-bold mt-3">
                <p>GST</p>
              </div>
              <div className="col-md-5 font-weight-bold mt-3">
                <p>5%</p>
              </div>
            </div>
            <hr/>
            <button onClick={()=>setOpen(true)} className="m-auto" style={{width:'100%',border: 'none', backgroundColor: '#ffd438', height:'40px', padding: '10px'}}>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal isOpen={open}></Modal>
    <Footer />
  </>
}

export default Cart;