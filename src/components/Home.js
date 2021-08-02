import React from 'react';
import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';
import { Link } from 'react-router-dom';
// const axios = require('axios')


function Home() {

    return (
        <div className="container-fluid">
        <div className="card">
            <img src={beersImg} className="card-img-top" alt="all beers"/>
            <div className="card-body">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/beers" className="btn btn-dark" exact to="/beers">List of Beers</Link>
            </div>
        </div>
        <div className="card">
            <img src={newBeerImg} className="card-img-top" alt="beer"/>
            <div className="card-body">
                <h5 className="card-title">Random Beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/random-beer" className="btn btn-dark" exact to="/random-beer">Random Beer</Link>
            </div>
        </div>
        <div className="card">
            <img src={randomBeerImg}  className="card-img-top" alt="random-beer"/>
            <div className="card-body">
                <h5 className="card-title">New Beer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/new-beer" className="btn btn-dark" exact to="/new-beer">New Beer</Link>
            </div>
        </div>
        </div>
        
    )


}

export default Home;