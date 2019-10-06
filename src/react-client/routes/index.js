import React from "react";
import {Switch, Route} from "react-router-dom";
import AdminPage from "../containers/Admin";
import HomePage from "../containers/HomePage";
import ContactUs from "../containers/Contact";
import AskQuestion from "../containers/QAPage";

class AppRoute extends React.Component{
    render(){
        return(
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/ask" component={AskQuestion}/>
                <Route path="/adminPage" component={AdminPage} />
                </Switch>
        );
    }
}

export default AppRoute;