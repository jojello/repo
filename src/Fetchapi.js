const fetchDigg = () => {
  return fetch(
    "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json"
  )
    .then(results => results.json())
    .then(results => {
      let diggArticles = results.data.feed.map(article => {
        return {
          title: article.content.title_alt,
          description: article.content.description,
          url: article.content.original_url,
          score: article.dig_score,
          image: article.content.media.images[0].image_url,
          category: article.content.tags[0].name,
          source: "digg"
        };
      });
      return diggArticles;
    });
};

// function fetchMash (){} - means the same thing
const fetchMash = () => {
  return fetch(
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/everything?sources=mashable&apiKey=48117437669b4c599e55ad484c86d8e6"
  )
    .then(results => results.json())
    .then(results => {
      let mashArticles = results.articles.map(article => {
        return {
          title: article.title,
          description: article.description,
          url: article.url,
          score: article.publishedAt,
          image: article.urlToImage,
          category: article.description,
          source: "mash"
        };
      });
      return mashArticles;
    });
};

const fetchABC = () => {
  return fetch(
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=48117437669b4c599e55ad484c86d8e6"
  )
    .then(results => results.json())
    .then(results => {
      let abcArticles = results.articles.map(article => {
        return {
          title: article.title,
          description: article.description,
          url: article.url,
          score: article.publishedAt,
          image: article.urlToImage,
          category: article.description,
          source: "abc"
        };
      });
      return abcArticles;
    });
};

export { fetchABC, fetchMash, fetchDigg };
