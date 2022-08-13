import React, { Component } from 'react'
import Loading from './loading';
import Newsitems from './newsitems'
import PropTypes from 'prop-types';
export default class News extends Component {
      constructor(props){
            super(props);
            console.log("constructoe called");
            this.state={
                  article:[],
                  loading:false,
                  pageno:1,
                  newsno:0
            }
            document.title=`News padho :${this.capitalizeFirstLetter(this.props.category)}`;
      }
      capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          
      static defaultProps = {
            country:"in",
            pagesize:3,
            category:"general"
      }
      static propTypes = {
            country:PropTypes.string,
            pagesize:PropTypes.number,
            category:PropTypes.string,
      }
      update=async()=>{
            this.setState({loading:true});
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=de9b04c12086420b8a94d4b06ad367b6&page=${this.state.pageno}&pageSize=${this.props.pagesize}`
            let data=await fetch(url);
            let jsondata=await data.json();
            this.setState({loading:false});
            this.setState({article:jsondata.articles});
            this.setState({newsno:jsondata.totalResults});
      }
      async componentDidMount(){
            this.update();
      }
      handlenext=async ()=>{
            
            if(this.state.newsno>this.state.pageno*3){
            this.setState({pageno:this.state.pageno+1});
            this.update();
            }
      }
      handleprev=async ()=>{
            
            this.setState({pageno:this.state.pageno-1});
            this.update();
      }
      
  render() {
    return (
      <div className="container">
            <h1 style={{textAlign:"center"}}>Top headlines from : {this.capitalizeFirstLetter(this.props.category)} </h1>
            {this.state.loading &&<Loading/>}
            <div className="row">
                  {!this.state.loading && this.state.article.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <Newsitems title={element.title} newscontent={element.description} ImageUrl={element.urlToImage} urllink={element.url} Author={element.author} dates={element.publishedAt}/>
                        </div>
                  })}
                  <div className='d-flex justify-content-between fixed-bottom'>
                   <button disabled={this.state.pageno<=1} type="button" onClick={this.handleprev} className="btn btn-dark">&laquo; Previous</button>
                   <button type="button" className="btn btn-dark" onClick={this.handlenext}>Next &raquo;</button>
                </div>
            </div>
      </div>
    )
  }
}
