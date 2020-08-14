import React from "react";
import NewsItem from "./NewsItem";

const NewsList = (props) => {

  return (
    <div>
      <div className="flex-row mb-3">
        <h4>TRENDING NEWS</h4>
        <a className="ml-auto"><u>VIEW ALL</u></a>
      </div>
      {props.newsList.map((news) => {
          return <NewsItem key={news.id} index={news.id} data={news}/>
        }
      )}
    </div>
  )
};

export default NewsList
