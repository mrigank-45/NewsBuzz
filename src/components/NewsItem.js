import React from 'react'

const NewsItem = (props)=> {
  
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{ display: 'flex', justifyContent: 'flex-end',position: 'absolute',right: '0'}}>
            <span className="badge rounded-pill bg-danger"> {props.source} </span>
          </div>
          <img src={!props.imageUrl ? "https://wgntv.com/wp-content/uploads/sites/5/2022/09/snapshot-2022-09-02T173245.138.jpg?w=1280" : props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on  {new Date(props.date).toGMTString()}</small></p>
            <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
