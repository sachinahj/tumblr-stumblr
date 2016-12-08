import React from 'react';
import {autobind} from 'core-decorators';

import template from './template.jsx';

class Search extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func,
  };

  static defaultProps = {
    onSearch: () => {},
  };

  constructor(props) {
    super(props);
  }

  @autobind
  onClick(e) {
    console.log("e", e);
    e.preventDefault();
    const searchRequest = {
      blogIdentifier: this.refs.blogIdentifier.input.value,
      tag:  this.refs.tag.input.value,
    };
    console.log("searchRequest", searchRequest);
    if (searchRequest.blogIdentifier || searchRequest.tag) {
      this.props.onSearch(searchRequest);
    }
  }

  render() {
    const propsTemplate = {
      onClick: this.onClick,
    };

    return template(propsTemplate);
  }
};

export default Search;
