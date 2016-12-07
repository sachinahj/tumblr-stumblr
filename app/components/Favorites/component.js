import React from 'react';
import {autobind} from 'core-decorators';

import template from './template.jsx';

class Favorites extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const propsTemplate = {
      testFn: this.testFn,
    };

    return template(propsTemplate);
  }
};

export default Favorites;
