import React, { Component } from 'react';

export default class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: [],
            isLoading: true,
        }
    }

    async componentDidMount() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        this.setState({
           pokemon: data.results,
           isLoading: false,
        });
      }
      catch(err) {
        console.log(err);
      }
    }

    render() {
      const {pokemon, isLoading} = this.state
      
      if(isLoading) {
         return <div> Loading... </div>;
      }
      else if(pokemon.length === 0) {
         return <div> There are no Pokemon </div>;
      }
      else {
        return (
          <div>
            <div> This is the pokemon list </div>
            <div>
              {pokemon.map(el => {
                 return <div> {el.name} </div>
              })}
            </div>
          </div>  
        );
      }
    }
}