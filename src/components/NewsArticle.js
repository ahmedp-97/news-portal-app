import React from "react";


function NewsArticle({ data }) {
  
  return (
    <div className="news">
      <img alt="pictures" width="450" height="305" src={data.urlToImage} />
      <h1 className="news_title">{data.title}</h1>
      <p className="news_desc">{data.description}</p>
      <button onClick = {() => {
      }} > Read more</button>
    </div>
  );
}

export default NewsArticle;
