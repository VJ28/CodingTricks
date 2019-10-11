import React from "react";
class HomePage extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        var template = document.getElementsByClassName("html--template")[0].textContent.split("").map(obj => {if(obj != " " && obj != "\n") return `<span>${obj}</span>`; else return obj;})
        var preText = document.createElement("pre")
        preText.innerHTML = template.join("");
        document.getElementsByClassName("html--template")[0].innerHTML="";
        document.getElementsByClassName("html--template")[0].appendChild(preText);
    }

    render(){
        return(
            <>
            <section className="section--intro">
                <h1>Introducing CodingTricks!</h1>
                <p>An ambitious platform to help you learn and share.</p>
            </section>
            <section className="html--template">
                <pre>
                {`     <html>
        <head>
            <title>
                Let's explore more!
            </title>
        </head>
        <body>
            <div>
                Are you Ready?
                Touch me!
            </div>
        </body>
      </html>`}
                </pre>
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
            <section class="height28"></section>
            </>
        );
    }
}

/*
var a = document.getElementsByClassName("html--template")[0].textContent.split("").map(obj => {if(obj != " " && obj != "\n") return `<span>${obj}</span>`; else return obj;})
var p = document.createElement("pre")
p.innerHTML = a.join("")
document.getElementsByClassName("html--template")[0].appendChild(p)
*/

export default HomePage;