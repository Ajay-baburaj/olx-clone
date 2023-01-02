import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useEffect,useContext } from 'react';
import firebase from 'firebase';
import { AuthContext } from '../../context/FirebaseContext';
import { useHistory ,Link} from 'react-router-dom';


function Header() {

  const {user,setUser} = useContext(AuthContext)
  const {history} = useHistory()



  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      console.log('user inside header')
      console.log(user.displayName)
      
    })
    
  },[])

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to={'/login'}>
          <span>{
            user? `welcome ${user.displayName}`
            : "Login"
          }</span></Link>
          <hr />
        </div>
        <div className='logout'>
          <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>{ user ? "Logout" : ''}</span>
        </div>
        <Link to={'/create'}>
            <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent" >
              <SellButtonPlus></SellButtonPlus>
              <span> 
                SELL</span>
            </div>
          </div>
        </Link> 

          
        
      </div>
    </div>
  );
}

export default Header;
