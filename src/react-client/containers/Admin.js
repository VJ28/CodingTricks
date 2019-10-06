import React from "react";

class AdminPage extends React.Component{
    constructor(){
        super();
    }

    submitData(){
        let title = document.getElementById("title").value;
        let description = document.getElementById("desc").value;
        fetch(`/putData/?title=${title}&description=${description}`)
            .then(res => res.json())
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <>
                <input type="text" id="title" placeholder="Enter Title"/>
                <textarea cols="5" rows="5" placeholder="Enter Contents" id="desc"/>
                <button onClick={() => this.submitData()}>Submit</button>
            </>
        );
    }
}

export default AdminPage;