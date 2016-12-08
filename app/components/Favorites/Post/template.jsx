import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const template = (props) => {
  const {
    post,
    onClick,
  } = props;

  const label = post._isFavorite ? "Remove" : "Add";
  let postHTML;
  
  switch (post.type) {
    case 'text':
      postHTML = <div dangerouslySetInnerHTML={{__html: post.body}} />;
      break;
    case 'link':
      postHTML = <a href={post.url}>{post.excerpt}</a>;
      break;
    case 'answer':
      postHTML = <div dangerouslySetInnerHTML={{__html: post.answer}} />;        
      break;
    case 'quote':
      postHTML = <p>{post.text}</p>;
      break;
    case 'photo':
      postHTML = <img height="250" src={post.photos[0].original_size.url} />;
      break;
    case 'video':
      postHTML = (
        <video height="250" poster={post.thumbnail_url} controls>
          <source src={post.video_url} type="video/mp4" />
        </video>
      );
      break;
    case 'audio':
      postHTML = <div dangerouslySetInnerHTML={{__html: post.player}} />;
      break;
    case 'chat':
      postHTML = (
        <div className="col-xs">
          {  
            post.dialogue.map((message, index) => {
              return [  
                <div className="row">
                  <p>{message.phrase}</p>
                </div>,
                <div className="row">
                  <p>-- {message.name}</p> 
                </div>
              ]    
            })
          }
        </div>
      );
      break;
    default:
      console.log("unknown post type:", post.type);
      postHTML = <span>{post.id}: {post.type}</span>;
  }

  return (
    <div className="post row margin-top">
      <div className="col-xs">
        <h6 className="row title margin-bottom-half">
          {post.summary}
        </h6>
        <div className="row flex-items-xs-center">
          {postHTML}
        </div>
        <div className="row flex-items-xs-right">
          <FlatButton label={label} primary={true} onTouchTap={onClick} />
        </div>
      </div>
    </div>
  );
};

export default template;
