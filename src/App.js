import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Nav from "./components/Nav";
import Card from "./components/Card";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends React.Component {
  state = {
    pokemon,
    highScore: 0,
    currentScore: 0,
    message: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const updatedScore = this.state.currentScore + 1;
    this.setState({
      currentScore: updatedScore,
      message: ""
    });

    if (updatedScore >= this.state.highScore) {
      this.setState({ highScore: updatedScore });
    } else if (updatedScore === 10) {
      this.setState({ message: "You Win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "You lose!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPokemon = shufflePokemon(pokemon);
    this.setState({ pokemon: shuffledPokemon });
  };

  render() {
    return (
      <div id="wrapper">
        <Nav
          title="Pokemon Clicky Game"
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        <Grid fluid>
          <Row id="message-row">
            <Col xs={12}>
              <h3>Try to click on each character only once to win the game!</h3>
            </Col>
          </Row>
          <Row id="pokemon-row">
            {this.state.pokemon.map(pokemon => (
              <Col xs={6} md={3}>
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  image={pokemon.image}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

function shufflePokemon(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
};

export default App;