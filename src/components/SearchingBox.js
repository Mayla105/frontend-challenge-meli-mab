import React from 'react';

function SearchingBox(props) {
  
  return (
    <React.Fragment>
      <header className='nav-header'>
        <div className='nav-bounds'>
          <a className='nav-logo' href='/' tabIndex='2'>
            Mercado Libre
          </a>
          <form>
            <input
              type='text'
              placeholder='Nunca dejes de buscar'
              name='search'
              className='nav-search-input'/>
            <button type='submit' className='nav-search-btn' tabIndex='3'>
              <div className='nav-icon-search' aria-label='Buscar'></div>
            </button>
          </form>
        </div>
      </header>
    </React.Fragment>
  );
}

export default SearchingBox;