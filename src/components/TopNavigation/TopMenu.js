import React from 'react';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
//import {NavLink, Link} from 'react-router-dom';
//import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
//import logo from '../../img/logo.png';


const TopMenu = () => {

     // const [topnavBar, setTopnavBar] = useState("topnav");
    // const [responsive, setResponsive] = useState("topnav.responsive");
//     const toggleClass = () => {
//       setisMenu(isMenu === false ? true : false);
//       setResponsiveclose(isResponsiveclose === false ? true : false);
//   };

//     let boxClass = ["main-menu menu-right menuq1"];
//     if(isMenu) {
//         boxClass.push('menuq2');
//     }else{
//         boxClass.push('');
//     }

//     const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
//     const toggleSubmenu = () => {
//       setMenuSubMenu(isMenuSubMenu === false ? true : false);
//     };
    
//     let boxClassSubMenu = ["sub__menus"];
//     if(isMenuSubMenu) {
//         boxClassSubMenu.push('sub__menus__Active');
//     }else {
//         boxClassSubMenu.push('');
//     }

   

    return (
        <div className="topnav" idName="myTopnav">
        <a href="#0" onClick={(e)=> e.preventDefault()} >Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            {/* <a href="">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
             <button>Link 1</button>
            <button>Link 2</button>
            <button>Link 3</button>
          </div>
        </div> 
        <a href="#about">About</a>
          <a href="#0" onClick={(e)=> e.preventDefault()} style={{fontSize: 15}} className="icon" >&#9776;</a> 
      </div>
    )
}

export default TopMenu