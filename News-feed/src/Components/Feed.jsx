import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";



function Feed() {
  const [articles, setArticles] = useState([]);
 useEffect(() => { 
  const fetchNews = async () => { 
    try { 
   
      const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2024-10-30&to=2024-11-26&language=en&sortBy=relevancy&apiKey=Your-API-KEY`
      // { params: 
      //   {
      //     apiKey: 'Your-API-KEY' ,
      //      q: 'bitcoin',
      //       sources: 'bbc-news,the-verge',
      //       domains: 'bbc.co.uk, techcrunch.com',
      //       from: '2014-10-30',
      //       to: '2014-11-26',
      //       language: 'en',
      //       sortBy: 'relevancy',
      //       page: 2
      //   } }
      );
        setArticles(response.data.articles); 
        console.log(response.data.articles[0]);
        
      }  catch (error) { 
        console.log('Error fetching the news:', error.message); } 
      };
       fetchNews(); 
      }, []);
  return (
<div className="flex">
  <ul className="flex gap-x-8 gap-y-8 flex-wrap">
    {articles.map((article, idx)=>{
    return  <li key={idx} className="border-slate-300 border-solid border-2 rounded-lg">
      <h1 className="text-center font-semibold text-sky-800 mt-3">{article.author}</h1>
        <img className="w-80 items-center m-2 px-2 py-2" src={article.urlToImage} alt="Image" />
        <h2 className="font-sans font-light px-4 text-sky-700"><a href={article.url}>{article.title}</a></h2>
      </li>
    })}
  </ul>
</div>
)
}
export default Feed;
