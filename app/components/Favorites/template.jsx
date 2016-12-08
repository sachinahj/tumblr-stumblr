import React from 'react';
import Post from './Post';
import Search from './Search';

const template = (props) => {
  const {
    posts,
    favorites,
    onSearch,
    postAction,
  } = props;

  return (
    <div>
      <div className="row">
        <h1>Tumblr Stumblr</h1>
      </div>
      <div className="row">
        <div className="col-xs margin-right">
          <Search onSearch={onSearch} />
          <br/>
          {
            posts.map((post, index) => {
              return [
                <hr/>,
                <Post key={index} post={post} postAction={postAction} isFavorite={post._isFavorite} />,
              ];
            })
          }
          {posts.length ? <hr/> : null}
        </div>
        <div className="col-xs margin-left">
          {
            favorites.map((favorite, index) => {
              return [
                <hr/>,
                <Post key={index} post={favorite} postAction={postAction} isFavorite={true} />,
              ];
            })
          }
          {favorites.length ? <hr/> : null}
        </div>
      </div>
    </div>
  );
};

export default template;
