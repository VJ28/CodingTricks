import React from "react";

class HomePage extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <h1>My First SSR with NodeJs ReactJS Express.</h1>
            <section>
                This Web Application has been developed using MERN Stack using SSR.
            </section>
            </>
        );
    }
}

export default HomePage;