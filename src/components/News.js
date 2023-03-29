import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {
constructor(){
    super();
    this.state={
      articles: [],
      page:1,
      loading: false
    }
  }
  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.KEY}&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading: false})
  }
   clickNext=async()=>{
    console.log("next")
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
   clickPrev=async()=>{
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.KEY}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading: false
    })
  }

  render() {
    const capitalizeFirst = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  
    return (
      <div className='container my-3'>
        <h1 className="text-center">News app - {capitalizeFirst(this.props.category)}</h1>
         {this.state.loading && <Spinner/>} 
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={!element.urlToImage?"https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png":element.urlToImage} url={element.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-sm btn-dark" disabled={this.state.page<=1} onClick={this.clickPrev}>&larr; previous</button>
          <button className="btn btn-sm btn-dark" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.clickNext}>&rarr; next</button>
        </div>
      </div>
    )
  }
}

export default News