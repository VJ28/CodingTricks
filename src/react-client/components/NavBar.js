import React from "react";
import {Link} from "react-router-dom";
class NavBar extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
        document.getElementById("nav-bar__ul").classList.toggle("show");
    }

    render(){
        return(
            <>
            <section id="nav-bar">
                <div onClick={()=> this.handleClick()} className="header-bar">
                    <div className="nav-btn">
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                    <div className="app_title">Coding Tricks</div>
                </div>
                <ul id="nav-bar__ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs/">Blogs</Link></li>
                <li><Link to="/ask/">Ask Questions</Link></li>
                <li><Link to="/contactus/">Contact Us</Link></li>
                <li><Link to="/adminPage">AdminPage</Link></li>
                </ul>
            </section>
            <section className="footer">
                &copy; 2019 Made by Vijay Mourya.
            </section>
            </>
        )
    }
}

export default NavBar;