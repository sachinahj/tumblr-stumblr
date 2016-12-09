import React from 'react';
import Post from './Post';
import Search from './Search';

const template = (props) => {
  const {
    feedback,
    posts,
    favorites,
    onSearch,
    postAction,
  } = props;

  let results;
  if (feedback) {

    results = <h5>{feedback}</h5>;

  } else {

    results = posts.map((post, index) => {
      return [
        <hr/>,
        <Post key={index} post={post} postAction={postAction} isFavorite={post._isFavorite} />,
      ];
    });

  }

  return (
    <div>
      <div className="row">
        <h1>Tumblr Stumblr</h1>
      </div>
      <div className="row">
        <div className="col-xs margin-right">
          <Search onSearch={onSearch} />
          <br/>
          {results}
          {posts.length ? <hr/> : null}
        </div>
        <div className="col-xs margin-left">
          <div className="row flex-items-xs-center">
            <h4>Favorites</h4>
          </div>
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
