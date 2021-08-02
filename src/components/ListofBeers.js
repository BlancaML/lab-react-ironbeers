import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


class ListofBeers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({ beers: response.data})
        })
    }


    render() {

        return (

            <div className="List">
              <Navbar/>
                {this.state.beers.map(beer => 
                    <div className="card mb-3 m-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={beer.image_url} className="img-fluid rounded-start m-3" alt={beer.name} style={{maxWidth: "60px"}}/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{beer.name}</h5>
                          <p className="card-text">{beer.tagline}</p>
                          <p className="card-text"><small className="text-muted"><b>Created by:</b>{beer.name}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}
            </div>
        )
    }
}

export default ListofBeers;