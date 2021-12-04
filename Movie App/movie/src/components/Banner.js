// import { myMovie } from "./movielist";

import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        // let newMovie=myMovie.results
        return (
            
              <>
                  <div id="carouselExampleIndicators" className="carousel slide my-1" data-bs-ride="carousel" style={{width:"100vw",height:"50vh"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                  <div className="carousel-inner" style={{width:"100vw",height:"50vh"}}>
              
               <div className="carousel-item active" >
                <img src="https://image.tmdb.org/t/p/original/6EdKBYkB1ssgGjc249ud1L55o8d.jpg"  className="d-block w-100" alt="..."/>
                </div>
               <div className="carousel-item " >
                <img src="https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"  className="d-block w-100" alt="..."/>
                </div>
               <div className="carousel-item " >
                <img src="https://image.tmdb.org/t/p/original/nDLylQOoIazGyYuWhk21Yww5FCb.jpg"  className="d-block w-100" alt="..."/>
                </div>
                       
                       
                    
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
              </>  
           
        )
    }
}
