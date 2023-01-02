import React,{useEffect,useState,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Components/Create/Create';
// import  Context  from './context/FirebaseContext';
import Home from './Pages/Home';
import { AuthContext } from './context/FirebaseContext';
import firebase from 'firebase';
import View from './Pages/ViewPost';
import Post from './context/PostContext';

import { cleanup } from '@testing-library/react';

function App() {
  return (
    <div>
    <Post>
      <Router>
        <Route path={'/'} exact><Home /></Route> 
        <Route path={'/signup'}><Signup/></Route>
        <Route path={'/login'}><Login/></Route>
        <Route path={'/create'}><Create /></Route>
        <Route path={'/view'}><View /></Route>

     </Router>
    </Post>
    </div>
  );
}

export default App;
