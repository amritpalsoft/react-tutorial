import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
           <nav className="navbar navbar-expand-lg navbar-warning bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Movies App</a>
    <a className="navbar-brand" href="/">Favourites</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
            </>
        )
    }
}
