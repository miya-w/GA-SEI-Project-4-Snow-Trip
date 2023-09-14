import { Link } from "react-router-dom"
import React from "react"
import './NavBar.css';
import * as userService from '../../utilities/users-service'
// import iconLog from '../images/icon-log-out.png'
// import Logo from '../../components/';
// import IconLogOut from '../images/icon-log-out.png';

export default function NavBar({user,setUser}){
    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    return(
    <div className="">
        <nav className="zone">
            <div className="push " >
            <Link to="/">
                <img src={require('../../components/images/logo-snow-mountain.png')} />
            </Link>
            </div>
                  
            <div className="flex-ctr-ctr ">
            <Link to="/itinerary">My Itinerary</Link>
            </div>

            <div className="flex-ctr-ctr ">
            <span>Welcome,{user.name}</span>
            </div>
           
            <div className=" log-out flex-ctr-ctr ">
            <Link to="" onClick={handleLogOut}><img src={require('../../components/images/icon-log-out.png')}></img></Link>
            </div>

            
        </nav>
        <div className="nav-hr  ">
        <hr />  
        </div>
         
        </div>
       
    )
}