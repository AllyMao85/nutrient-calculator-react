import React from 'react';
import { Container } from 'reactstrap';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import API from '../../utils/API';


export default class IngredientContainer extends React.Component {

state = {
  dbRecipes: []
}

getRecipes = () => {
  API.getRecipes()
      .then(res => {
          this.setState({
              dbRecipes: res.data
          })
      })
}

componentDidMount() {
  this.getRecipes();
};

  render() {
    return (
      <Container>
        <AddRecipeForm getRecipes={this.getRecipes} dbRecipes={this.state.dbRecipes}/>
        <RecipeList getRecipes={this.getRecipes} dbRecipes={this.state.dbRecipes}/>
      </Container>
    );
  }
}