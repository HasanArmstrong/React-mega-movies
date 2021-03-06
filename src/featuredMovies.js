import React, { Component } from 'react'

export default class FeaturedMovies extends Component {
  render() {
    if (!this.props.featuredOne) {
        return <div>Loading ...</div>
    }
return(
<div className="container-fluid ">
    <img className="card-img" src={'http://image.tmdb.org/t/p/original/' + this.props.featuredOne.backdrop_path}  alt='feat'/>
    <div className="text-center imgoverlay">
        <h3 className="font-weight-bold" style={{fontFamily: 'fantasy'}}>{this.props.featuredOne.title}</h3>
        <p className="container card-text ">{this.props.featuredOne.overview}</p>
        <button type="button" className="btn btn-outline-light">let's chill.</button>
    
            <div className="mt-3">
                <button className=" btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Genre
                </button>
                <div className="dropdown-menu m-0 container-fluid" aria-labelledby="dropdownMenuButton">
                  <div className="row m-0" >
                    <div className="bgcl col-4">
                    <button type="button" className="btn btn-outline-light col-12 border-0">Action</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Crime</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Romance</button>
                    </div>
                
                  <div className="bgcl col-4">
                    <button type="button" className="btn btn-outline-light col-12 border-0">Romance</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Horror</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Comedies</button>
        
                  </div>  
                  <div className="bgcl col-4">
                    <button type="button" className="btn btn-outline-light col-12 border-0">Anime</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Sci-fi</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Documentaries</button>
                  </div> 
                  </div>
                </div>
            </div>
        
    </div>     
</div>


    )
  }
}
