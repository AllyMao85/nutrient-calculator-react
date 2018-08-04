
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Recipes from "./components/Recipes";
import { Container } from 'reactstrap';
import NavBar from "./components/NavBar";
import JumbotronComponent from "./components/Jumbotron";
import Smoothie from "./components/Smoothie";


const App = () =>
    <Container>
        <Router>
            <div>
                <JumbotronComponent/>
                <NavBar />
                <Route exact path="/" component={Smoothie} />
                <Route exact path="/Ingredients" component={Ingredients} />
                <Route exact path="/Recipes" component={Recipes} />
                {/* <Route path="/Ingredients" component={Recipes} /> */}
            </div>
        </Router>
    </Container>

    

    

export default App;