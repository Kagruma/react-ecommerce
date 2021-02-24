import React, { Component } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import './Home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: 'auto',
  width: '500px'
};
class Home extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <header className="header-container">
          <div className="Hero">
            <div className="heroText">
              <Link to="/products">
              <a href="products.html"><h3>Explore the Collection: fangs AW2020</h3></a>
              </Link>
            </div>
          </div>
        </header>
        <br>


        </br>
        <div style={styles} className="carousel">
          <h1>A few modeling shots from the fangs collection:</h1>
		<Carousel>




			<div>
				<img src="https://images.unsplash.com/photo-1603401189093-c362752df07c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="" />
				
			</div>
			<div>
				<img src="https://images.unsplash.com/photo-1582110720667-6bbef800b940?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Beautiful Moody Fine Art Dark Portrait."/>
				
			</div>
			<div>
				<img src="https://images.unsplash.com/photo-1608842374156-bb287e644f5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="Fine art portrait of model playing the role of a pirate ."/>
				
			</div>
			<div>
				<img src="https://images.unsplash.com/photo-1554468154-86518550d14c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt=""/>
			
			</div>
		</Carousel>
    
	</div>
  <Footer/>
        </div>



    );
  }
}

export default Home