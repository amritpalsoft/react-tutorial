import { myMovie } from "./movielist";

import React, { Component } from 'react'

export default class Movies extends Component {
    render() {
        let newMovie=myMovie.results

        return (
            <>
            {
                newMovie.length===0?
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>:
                <div>
              <h2 className="text-center my-3"><strong>Trending</strong></h2>  
              <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                  {
                      newMovie.map((movieObj)=>(
                        <div  className="card" style={{display:"flex",flexDirection:"column"}} >
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}   className="card-img-top" alt="" style={{padding:"2rem",width:"18rem",height:""}}/>
                        <div  className="card-body" style={{width:"18rem"}}>
                            <h5 style={{textAlign:"center"}} className="card-title">{movieObj.original_title}</h5>
                            {/* <p  className="card-text">{movieObj.overview}</p> */}
                            <a href="/"  className="btn btn-primary ">Add to favourites</a>
                        </div>
                        </div>
                      ))
                  }
              </div>
                </div>
            }
            </>
        )
    }
}
