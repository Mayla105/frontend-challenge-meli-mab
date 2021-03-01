import React from 'react';

const SearchingBox = () => {
  return (
    <React.Fragment>
      <header className='nav-header nav-header-plus'>
        <div className='nav-bounds'>
          <a className='nav-logo' href='/' tabIndex='2'>
            Mercado Libre
          </a>
          <form className='nav-search'>
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
};

export default SearchingBox;