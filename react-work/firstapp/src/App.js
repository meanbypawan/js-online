import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Binding from './components/Binding';
import StateDemo from './components/StateDemo';
import StateDemoTwo from './components/StateDemoTwo';
import StudentList from './components/StudentList';

class App extends Component{
  render(){
    return <div>
      <h1>App Component......</h1>
      {/* <Header/>
      <Binding/> */}
      {/* <StateDemo/> */}
      {/* <StateDemoTwo/>  */}
      <StudentList/>
    </div>
  }
}
export default App;


