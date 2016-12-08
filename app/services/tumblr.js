import FetchJSONP from "fetch-jsonp";
import LocalConfig from "../../_config.json";
const apiKey = LocalConfig.tumblr.apiKey;

const getPosts = (searchRequest) => {
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

  console.log("url", url);

  FetchJSONP(url)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      console.log("responseJson", responseJson);
    })
    .catch(error => {
      console.error("error", error);
    });
};

const Tumblr = {
  getPosts,
};

export default Tumblr;
