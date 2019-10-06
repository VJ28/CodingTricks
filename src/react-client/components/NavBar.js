import React from "react";
import {Link} from "react-router-dom";
class NavBar extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
        document.getElementById("nav-bar__ul").classList.toggle("hide");
    }

    render(){
        return(
            <section id="nav-bar">
                <div onClick={()=> this.handleClick()} className="nav-btn">
                    Menu
                </div>
                <ul id="nav-bar__ul" className="hide">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs/">Blogs</Link></li>
                <li><Link to="/ask/">Ask Questions</Link></li>
                <li><Link to="/contactus/">Contact Us</Link></li>
                <li><Link to="/adminPage">AdminPage</Link></li>
                </ul>
            </section>
        )
    }
}

export default NavBar;