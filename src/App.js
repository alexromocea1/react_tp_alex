import React,{ Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Todoadd from "./views/Todo/Todoadd";
import Tododetails from "./views/Todo/Tododetails";
import Todolist from "./views/Todo/Todolist";
import Todoupdate from "./views/Todo/Todoupdate";
import UserDetails from "./views/User/UserDetails";
import UserList from "./views/User/UserList";



export default class App extends Component{

  render(){
    return <BrowserRouter>
    <Header/>
                <Switch>
                  
                  <Route exact path="/todos" component={Todolist} />
                  <Route exact path="/todos/ajouter" component={Todoadd} />
                  <Route exact path="/todos/:id" component={Tododetails} />
                  <Route exact path="/todos/:id/modifier" component={Todoupdate} />

                  <Route exact path="/utilisateurs" component={UserList}/>
                  <Route exact path="/utilisateurs/:id" component={UserDetails}/>
                </Switch>
                <Footer/>
          </BrowserRouter>
  }
}


