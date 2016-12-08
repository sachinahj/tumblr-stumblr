import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const template = (props) => {
  const {
    post,
    onClick,
  } = props;

  const label = post._isFavorite ? "Remove" : "Add";

  return (
    <div>
      <span>{post.id}: {post.type}</span>
      <FlatButton label={label} primary={true} onTouchTap={onClick} />
    </div>
  );
};

export default template;
