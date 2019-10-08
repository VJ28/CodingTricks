import React from "react";
class HomePage extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <section className="section--intro">
                <h1>Introducing CodingTricks!</h1>
                <p>An ambitious platform to help you learn and share.</p>
            </section>
            <section className="section--aboutus">
                <h2>About Us</h2>
                <div className="list--aboutus">
                    <div>
                        A bloging site to share some knowledge (and some gain).
                    </div>
                    <div>
                        Always open for clearing doubts/questions if any.
                    </div>
                    <div>
                        Have some fun bloging(well! this is the foremost main reason for being here).
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default HomePage;