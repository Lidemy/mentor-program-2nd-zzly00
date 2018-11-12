import React from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'
import NewsDetail from './NewsDetail'
import apiKey from '../apiKey'

export default class KrNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      newsId: null
    }
  }

  componentDidMount() {
    const country = this.props.tab
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
      .then((response) => {
        this.setState({
          articles: response.data.articles
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleClickNews(e) {
    this.setState({
      newsId: e.target.parentNode.dataset.id
    })
    window.scrollTo(0, 0)
  }

  handleClickBack() {
    this.setState({
      newsId: null
    })
  }

  render() {
    const title = '한국신문'
    const {articles, newsId} = this.state
    return (
      newsId
        ? <NewsDetail article={articles[newsId]} handleClickBack={this.handleClickBack.bind(this)} />
        : (<div>
          <h1>{title}</h1>
          <div className="d-flex flex-wrap justify-content-between">
            {articles.map((article, index) => {
              return ( article !== null && <NewsCard key={index} article={article} index={index} handleClickNews={this.handleClickNews.bind(this)} />)
            })}
            <div className="card" style={{width: '22rem', marginTop: '2rem', border: 'none'}}></div>
            <div className="card" style={{width: '22rem', marginTop: '2rem', border: 'none'}}></div>
          </div>
        </div>)
    )
  }
}