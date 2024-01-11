import React from 'react';

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader ${isLoading ? 'visible' : 'hidden'}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;