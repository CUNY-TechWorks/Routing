import React from 'react';
import {Home, About, NotFound, Pokemon} from'./components/';
import {Route, Switch} from 'react-router-dom';

export default function Routes() {
   // To display the text of these routes, you have to edit the url by 
   // inputting the path

   // The Switch function will alternate between routes based on the 
   // provided path in the URL. Like condition statements
   return (
     <Switch>
         <Route exact path="/home" component={Home} />

         <Route exact path="/about" component={About} />

         <Route exact path="/pokemon" component={Pokemon}/>

         <Route path="*" component={NotFound} />
     </Switch>
   );
}