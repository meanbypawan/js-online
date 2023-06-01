import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/shop/Shop';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
  </>
}

export default App;
