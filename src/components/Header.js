import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
   return (
      <div>
        <div> This is the navigation bar </div>
        <Link to="/home">
           <div> Home </div>
        </Link>

        <Link to="/about">
           <div> About </div>
        </Link>

        <Link to="/pokemon">
           <div> Pokemon List </div>
        </Link>

        <Link to="/pokemon/:pokemonId">
            <div> Pokemon page </div>
        </Link>
        
        <Link to="*">
           <div> Incorrect Link </div>
        </Link>
      </div>
   );
}