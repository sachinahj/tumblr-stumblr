import FetchJSONP from "fetch-jsonp";
import LocalConfig from "../../_config.json";
const apiKey = LocalConfig.tumblr.apiKey;

const getPosts = (searchRequest, callback) => {
  let url;
  if (searchRequest.blogIdentifier) {
    url = `http://api.tumblr.com/v2/blog/${searchRequest.blogIdentifier}/posts`
  } else {
    url = `http://api.tumblr.com/v2/tagged`;
  }
  url += `?api_key=${apiKey}`;
  if (searchRequest.tag) {
    url += `&tag=${searchRequest.tag}`;
  }
  url += `&callback=?`;

  FetchJSONP(url, {
    timeout: 1000,
  })
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    callback(null, responseJson.response.posts ? responseJson.response.posts : responseJson.response);
  })
  .catch(err => {
    callback(err, null);
  });
};

const Tumblr = {
  getPosts,
};

export default Tumblr;
