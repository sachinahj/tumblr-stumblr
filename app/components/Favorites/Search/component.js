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
  onSubmit(e) {
    e.preventDefault();
    const searchRequest = {
      blogIdentifier: this.refs.blogIdentifier.input.value,
      tag:  this.refs.tag.input.value,
    };
    if (searchRequest.blogIdentifier || searchRequest.tag) {
      this.props.onSearch(searchRequest);
    }
  }

  render() {
    const propsTemplate = {
      onSubmit: this.onSubmit,
    };

    return template(propsTemplate);
  }
};

export default Search;
