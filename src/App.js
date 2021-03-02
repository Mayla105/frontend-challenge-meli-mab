import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import SearchingBox from './components/SearchingBox';
import SearchResultList from './components/SearchResultList';
import ItemDetail from './components/ItemDetail';

import Loader from './components/Loader';
import Message from './components/Message';

const API = 'http://localhost:5000/api';

function App() {
  const history = useHistory();

  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getSearchResults = query => {
    fetch(`${API}/items?q=${query}`)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          console.error(response);
          setIsLoading(false);
          setResults({ error: response });
        } else {
          setResults(response);
          setIsLoading(false);
          history.push(`/items?search=${query}`);
        }
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
        setResults({ error: 'An error ocurred' });
      });
  };

  return (
    <div className='App'>
      <SearchingBox onSubmit={query => getSearchResults(query)} />
      {isLoading ? (
        <Loader />
      ) : (
        <Switch>
          <Route exact path='/items'>
            {results.error ? (
              <Message
                error={true}
                message={'Ups! algo ocurrió. Intenta nuevamente más tarde'}
              />
            ) : results.items ? (
              results.items.length ? (
                <SearchResultList
                  categories={results.categories}
                  items={results.items}
                />
              ) : (
                <Message
                  error={false}
                  message={
                    'No hay publicaciones que coincidan con tu búsqueda.'
                  }
                />
              )
            ) : (
              <Redirect to={'/'} />
            )}
          </Route>
          <Route path='/items/:id' categories={results.categories} component={ItemDetail} />
        </Switch>
      )}
    </div>
  );
}

export default App;
