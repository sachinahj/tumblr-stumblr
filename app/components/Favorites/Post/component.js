import React from 'react';
import {autobind} from 'core-decorators';

import template from './template.jsx';

class Search extends React.Component {

  static propTypes = {
    post: React.PropTypes.object,
    postAction: React.PropTypes.func,
  };
  static defaultProps = {
    post: {},
    postAction: () => {},
  };

  constructor(props) {
    super(props);
  }

  @autobind
  onClick(e) {
    e.preventDefault();
    this.props.postAction(this.props.post)
  }

  render() {
    const propsTemplate = {
      post: this.props.post,
      onClick: this.onClick,
    };

    return template(propsTemplate);
  }
};

export default Search;
