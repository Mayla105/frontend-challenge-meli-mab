import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SearchResultsList from './components/SearchResultList';
import ItemDetail from './components/ItemDetail';

const App = () => {
  //let history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route exact path='/items'>
          <SearchResultsList></SearchResultsList>
        </Route>
        <Route exact path='/items/:id'>
          <ItemDetail></ItemDetail>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
