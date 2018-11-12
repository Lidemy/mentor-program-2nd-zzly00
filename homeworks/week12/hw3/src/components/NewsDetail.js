import React from 'react'

export default class NewsDetail extends React.Component {
  render() {
    const {article, handleClickBack} = this.props
    return (
      <div>
        <button onClick={handleClickBack} className="btn btn-primary" style={{cursor: 'pointer'}}>Back</button>
        <h1 style={{margin: '1rem 0'}}>{article.title}</h1>
        {article.urlToImage && <img className="img-fluid" src={article.urlToImage} alt="News Img" />}
        <p style={{marginTop: '2rem'}}>{article.content && article.content.slice(0, 260)}</p>
        <a href={article.url}>More...</a>
      </div>
    )
  }
}