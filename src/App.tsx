import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import {Redirect, Route} from "react-router";
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import MainClass from './MainClass';
import UsersClass from './UsersClass';
import Hooks from './Hooks';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import ReduxBasics from './ReduxBasics';
import WebsiteReducerUI from './WebsiteReducerUI';
import SliceUI from './SliceUI';
import HotelsUI from './HotelsUI';
import HooksUI from './HooksUI';
import Login from './Login';
import SignUp from './SignUp';
import MaterialUI from './MaterialUI';
import Profile from './Profile';

function App() {
  return (
    <switch>
      { /* Routing examples*/}
      <Route exact path="/a" component={ComponentA} />
      <Route exact path="/b/:name" component={ComponentB} /> {/* : is used to indicate that url will contain some params */}
      <Route exact path="/c" component={ComponentC} />
      {/* class examples*/}
      <Route exact path="/MainClass" component={MainClass} />
      <Route exact path="/UsersClass" component={UsersClass} />
      {/* function examples */}
      <Route exact path="/Hooks" component={Hooks} />
      <Route exact path="/ComponentDidMount" component={ComponentDidMount} /> 
      <Route exact path="/ComponentDidUpdate" component={ComponentDidUpdate} /> 
      {/* redux examples */}
      <Route exact path="/ReduxBasics" component={ReduxBasics} /> 
      <Route exact path="/WebsiteReducerUI" component={WebsiteReducerUI} /> 
      <Route exact path="/SliceUI" component={SliceUI} /> 
       {/* react hooks form */}
       <Route exact path="/HooksUI" component={HooksUI} /> 
       {/* material ui */}
       <Route exact path="/MaterialUI" component={MaterialUI} /> 
      {/* project */}
      <Route exact path="/HotelsUI" component={HotelsUI} /> 
      <Route exact path="/Login" component={Login} /> 
      <Route exact path="/SignUp" component={SignUp} /> 
      <Route exact path="/Profile" component={Profile} /> 
      <Route exact path="/" render={() => <Redirect to="/HotelsUI" />} />
    </switch>
  );
}

export default App;
