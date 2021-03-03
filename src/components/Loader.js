import React from 'react';

export default function Loader(){
  return <div className='container-fluid large-container'>
    <div className='row flex-grow-1 h-100 align-items-center justify-content-center'>
      <div className='loader'></div>
    </div>
  </div>;
}