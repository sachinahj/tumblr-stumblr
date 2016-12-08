import React from 'react';
import Search from './Search';

const template = (props) => {
  const {
    onSearch,
  } = props;

  return (
    <div>
      <div className="row">
        <h1>Tumblr Stumblr</h1>
      </div>
      <div className="row">
        <div className="col-xs">
          <Search onSearch={onSearch} />
        </div>
        <div className="col-xs">
          One of three columns
        </div>
      </div>
    </div>
  );
};

export default template;
