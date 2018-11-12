import React from 'react'

export default class NewsCard extends React.Component {
  render() {
    const {article, index, handleClickNews} =this.props
    if(article.urlToImage && article.urlToImage.indexOf('http')){
      article.urlToImage = 'http://'+article.urlToImage
    }
    return (
      <div className="card col-12 col-md-6 col-lg-4" style={{marginTop: '2rem', padding: '0', cursor: 'pointer'}} data-id={index} onClick={handleClickNews}>
          <img className="card-img-top" src={article.urlToImage !== null ?  article.urlToImage : 'https://bit.ly/2OvQsKn'} alt="News Img" style={{height: '15rem', objectFit: 'cover'}} />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
          </div>
      </div>
    )
  }
}