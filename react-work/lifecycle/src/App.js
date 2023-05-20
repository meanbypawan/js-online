import logo from './logo.svg';
import './App.css';
import LifeCycle from './components/LifeCycle';
import Reducer from './components/Reducer';
import First from './components/First';
import Second from './components/Second';

function App() {
  return <>
    <h1>App Component....</h1>
    <First title={"Indore"}/>
    <Second name={"Rahil"} age={30}/>
  </>
}

export default App;
