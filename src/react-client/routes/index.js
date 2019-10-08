import React from "react";
import {Switch, Route} from "react-router-dom";
import loadable from '@loadable/component';
import HomePage from '../containers/HomePage';
const BlogsPage = loadable(() => import( /* webpackPreload: true */ '../containers/BlogsPage'));
const Contact = loadable(() => import( /* webpackPreload: true */ '../containers/Contact'));
const QAPage = loadable(() => import( /* webpackPreload: true */ '../containers/QAPage'));
const Admin = loadable(() => import( /* webpackPreload: true */ '../containers/Admin'));
class AppRoute extends React.Component{

    render(){
        return(
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/blogs" component={BlogsPage} />
                <Route path="/contactus" component={Contact} />
                <Route path="/ask" component={QAPage}/>
                <Route path="/adminPage" component={Admin} />
                </Switch>
        );
    }
}

export default AppRoute;