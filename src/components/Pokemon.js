import React, { Component } from 'react';

export default class Pokemon extends Component {
   constructor() {
      super();

      this.state = {
         pokemon: {},
         isLoading: true,
         isError: {error: false, msg: ""},
      }
   }

   async componentDidMount() {
      try {
        const { pokemonId } = this.props.match.params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        
        if(response.status === 404) {
           this.setState({
              isLoading: false,
              isError: {error: true, msg: 'This pokemon does not exist'}
           });
           return;
        }
        const data = await response.json();

        this.setState({
           pokemon: data,
           isLoading: false,
        });
      }
      catch(err) {
        console.dir(err);
        this.setState({
           isLoading: false,
           isError: {error: true, msg: err.message},
        });
      }
   }
   
   render() {
     const {isLoading, pokemon, isError} = this.state;

     if(isError.error) {
        return ( <div> {isError.msg} </div> )
     }
     if(isLoading) {
        return ( <div> Loading... </div>)
     }
     else {
       return (
         <div> 
            <div> {pokemon.name} </div>
         </div>
       );
     }
   }
}