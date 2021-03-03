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
      <header className='serach-container container-fluid'>
        <div className='search-bounds flex-row align-content-center'>
          <div className='col-auto col-xl-8 d-flex justify-content-center'>
            <div className='col-auto col-xl-2 p-1 d-flex justify-content-center'>
              <a className='logo mt-2' href='/' tabIndex='2'></a>
            </div>
            <div className='col-12 col-xl-8'>
              <form className='form-search' onSubmit={(event) => handleSubmit(event)}>
                <input
                  type='text'
                  placeholder='Nunca dejes de buscar'
                  name='search'
                  className='search-input col-auto'
                  onKeyUp={(e) => setQuery(e.target.value)}/>
                <button type='submit' className='search-button'>
                  <div className='nav-icon-search' aria-label='Buscar'></div>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

SearchingBox.propTypes = { onSubmit: PropTypes.func };

export default SearchingBox;