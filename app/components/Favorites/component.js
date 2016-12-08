import React from 'react';
import {autobind} from 'core-decorators';

import Tumblr from "../../services/tumblr";

import template from './template.jsx';

class Favorites extends React.Component {

  constructor(props) {
    super(props);
  }

  @autobind
  onSearch(searchRequest) {
    Tumblr.getPosts(searchRequest);
  }

  render() {
    const propsTemplate = {
      onSearch: this.onSearch,
    };

    return template(propsTemplate);
  }
};

export default Favorites;
