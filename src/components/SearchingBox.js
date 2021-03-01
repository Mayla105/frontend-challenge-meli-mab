import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SearchingBox = (props) => {

  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(query);
  };

  return (
    <React.Fragment>
      <header className='nav-header nav-header-plus'>
        <div className='nav-bounds'>
          <a className='nav-logo' href='/' tabIndex='2'>
            Mercado Libre
          </a>
          <form className='nav-search' onSubmit={(event) => handleSubmit(event)}>
            <input
              type='text'
              placeholder='Nunca dejes de buscar'
              name='search'
              className='nav-search-input'
              onKeyUp={(e) => setQuery(e.target.value)}/>
            <button type='submit' className='nav-search-btn' tabIndex='3'>
              <div className='nav-icon-search' aria-label='Buscar'></div>
            </button>
          </form>
        </div>
      </header>
    </React.Fragment>
  );
};

SearchingBox.propTypes = { onSubmit: PropTypes.func };

export default SearchingBox;