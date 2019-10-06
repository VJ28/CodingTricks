import React from "react";

class AskQuestion extends React.Component{
    constructor(){
        super();
    }

    submitQuestion(){
        let question = document.getElementById("question").value;
    }

    render(){
        return (
            <>
            <h1>Any doubt? Any Question? We are here to help you out.</h1>
            <div>
                <textarea rows="5" cols="10" id="question" placeholder="Enter your question here"/>
                <button onClick={() => this.submitQuestion()}>Submit</button>
            </div>
            </>
        );
    }
}

export default AskQuestion;