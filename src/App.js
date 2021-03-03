import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import SearchingBox from './components/SearchingBox';
import SearchResultList from './components/SearchResultList';
import ItemDetail from './components/ItemDetail';

import Loader from './components/Loader';
import Message from './components/Message';
import './App.scss';
import Breadcrumb from './components/Breadcrumb';


const API = 'http://localhost:5000/api';

function App() {
  const history = useHistory();

  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getSearchResults = query => {
    setIsLoading(true);
    fetch(`${API}/items?q=${query}`)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          console.error(response);
          setIsLoading(false);
          setResults({ error: response });
        } else {
          setResults(response);
          history.push(`/items?search=${query}`);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
        setResults({ error: 'Ocurrio un error inesperado' });
      });
  };

  return (
    <div className='App'>
      <SearchingBox onSubmit={query => getSearchResults(query)} />
      <Breadcrumb categories={results.categories}/>
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
          <Route path='/items/:id' component={ItemDetail} />
        </Switch>
      )}
    </div>
  );
}

export default App;
