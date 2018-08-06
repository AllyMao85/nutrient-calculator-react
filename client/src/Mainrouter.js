
import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Admin from "./components/admin";
import { Container } from 'reactstrap';
import NavBar from "./components/NavBar";
import JumbotronComponent from "./components/Jumbotron";
import Smoothie from "./components/Smoothie";
import Login from "./components/login";
import Profile from "./components/profile";

const App = () =>
    <Container>
        <Router>
            <div>
                <JumbotronComponent/>
                <NavBar />
                <Route exact path="/" component={Smoothie} />
                <Route exact path="/Ingredients" component={Ingredients} />
                {/* <Route path="/Ingredients" component={Recipes} /> */}
                <Route path="/users/admin" component={Admin} />
                <Route path="/users/login" component={Login} />
                <Route path="/users/profile" component={Profile} />
                
            </div>
        </Router>
    </Container>

    

    

export default App;