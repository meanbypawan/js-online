import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Binding from './components/Binding';
import StateDemo from './components/StateDemo';
import StateDemoTwo from './components/StateDemoTwo';
import StudentList from './components/StudentList';
import PropsFirst from './components/PropsFirst';
import PropsParent from './components/PropsParent';
import StateChange from './components/StateChange';
import ParentCom from './components/ParentCom';

class App extends Component{
  render(){
    return <div>
      <h1>App Component......</h1>
      {/* <Header/>
      <Binding/> */}
      {/* <StateDemo/> */}
      {/* <StateDemoTwo/>  */}
      {/* <StudentList/> */}
      <PropsParent/>
      {/* <StateChange/> */}
      {/* <ParentCom/> */}
    </div>
  }
}
export default App;


