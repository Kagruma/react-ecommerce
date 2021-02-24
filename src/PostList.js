import React, { Component } from 'react';
import PostData from './data/posts.json';

class PostList extends Component {
  render() {
    return (
      
      <div class="row">
        <div className="column">
          <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>
            <div className="card">
          {PostData.map((postDetail, index)=>{
          return <div><h1>{postDetail.name}</h1>
          <img className="thumbnails" src={postDetail.image} alt="test"></img>
          <p>{postDetail.desc}</p>
          <h2>{postDetail.price}</h2></div>
})}
          </div>
        
      </div>
      </div>
    );
  }
}

export default PostList