import React from 'react';
import {autobind} from 'core-decorators';

import Tumblr from "../../services/tumblr";
import template from './template.jsx';

class Favorites extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      favorites: [],
      feedback: null,
    };
  }

  @autobind
  onSearch(searchRequest) {
    this.setState({
      feedback: "Searching...",
    },
    () => {
      Tumblr.getPosts(searchRequest, (err, results) => {
        let posts = [];
        let feedback = null;

        if (!err && results && results.length) {

          posts = results.map((post) => {

            post._isFavorite = false;

            const index = this.state.favorites.findIndex((favorite) => {
              if (favorite.id == post.id) return true;
            });

            if (index != -1) {
              post._isFavorite = true;
            }

            return post;
          });

        } else {

          feedback = "No posts found for this search.";

        }

        this.setState({
          posts: posts,
          feedback: feedback,
        });
      });
    });
  }

  @autobind
  postAction(post) {
    const nextState = {};
    nextState.favorites = this.state.favorites;

    if (!post._isFavorite) {
      nextState.favorites.push(post);
      nextState.posts = this.updatePostsWithFavorites(post.id, true);
    } else {
      nextState.favorites = this.removePostFromFavorites(post.id);
      nextState.posts = this.updatePostsWithFavorites(post.id, false);
    }

    this.setState(nextState);
  }

  updatePostsWithFavorites(postId, isFavorite) {
    const posts = this.state.posts.map((searchPost) => {
      if (searchPost.id == postId) searchPost._isFavorite = isFavorite;
      return searchPost;
    });
    return posts;
  }

  removePostFromFavorites(postId) {
    const favorites = this.state.favorites;
    const index = favorites.findIndex((favorite) => {
      if (favorite.id == postId) return true;
    });

    if (index != -1) {
      favorites.splice(index, 1);
    }

    return favorites;
  }

  render() {
    const propsTemplate = {
      feedback: this.state.feedback,
      posts: this.state.posts,
      favorites: this.state.favorites,
      onSearch: this.onSearch,
      postAction: this.postAction,
    };

    return template(propsTemplate);
  }
};

export default Favorites;
