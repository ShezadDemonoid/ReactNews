import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import { Source } from './Sources';

 export class News extends Component {
  constructor() {
    super();
    this.state = {
      news: {},
      source: {}
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    //  this.search();
    var url = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=73a15de7daa44888a6171f0b2f042a31";
    Request.get(url).then((response) => {
      this.setState({
        news: response.body.articles
      });
    });


  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    this.updateSearch()

  }
  updateSearch(e) {
    var url = `https://newsapi.org/v1/articles?source=${e}&apiKey=73a15de7daa44888a6171f0b2f042a31`;
    Request.get(url).then((response) => {
      this.setState({
        news: response.body.articles
      });
    });
  }
  render() {
  var news = _.map(this.state.news, (info, i) => {
   return (
     <li key={i} className="list-inline-item">
       <div className="card card-size " >
         <img
           className="img-responsive card-img-top"
           style={{
             height: 200,
             width: 450
           }}
           src={info.urlToImage} alt="Not available"
         />
         <div className="card-body">
           <h3 className="h3"><a href={info.url}>{info.title}</a></h3>
           <p className="card-text">{info.description}</p>
           <label>by:</label> <span>{info.author}</span>
         </div>
         <a href={info.url} className="btn btn-primary">Read News</a>
       </div>

     </li>
   )
 });
  return (
    <div className="container">
      <Source onClick={(e) => { this.updateSearch(e); }} />
      <div>
        <h1 style={{ margin: 10, textAlign: "center" }}>Today's Main Headlines</h1>
        <ul className="news-display list-unstyled">{news}</ul>
      </div>
    </div>
  )
  }


}