import React from "react";
import NavBar from './NavBar';
import AppRoute from "../routes/index";
class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <>
            <NavBar/>
            <AppRoute/>
            </>
        )
    }
}

export default App;