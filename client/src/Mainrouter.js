
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
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
                <Route path="/" component={Smoothie} />
                <Route path="/Ingredients" component={Ingredients} />
                {/* <Route path="/Ingredients" component={Recipes} /> */}
            </div>
        </Router>
    </Container>

    

    

export default App;