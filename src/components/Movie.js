import React, {Component} from 'react'
import { Card, CardMedia } from '@material-ui/core';
import {Link} from 'react-router-dom';

import './Movie.css'

class Movie extends Component {

    handleActionBtn = () => {
        this.props.handleActionBtn(this.props.movie.id)
    }

    render() {
        return (
            <div className="single-movie">
                <Link to={`/movies/${this.props.movie.id}`} className="link-to-movie">
                {/* <Card className="movie-card" style={{backgroundSize: 'cover'}} >
                    <CardMedia image={this.props.movie.img} style={{height: '200px'}}/>
                </Card> */}
                <img src={this.props.movie.img} alt={this.props.movie.title} className='movie-card' height='200px' width='150px'/>
                </Link>
                <button className="action-btn" onClick={this.handleActionBtn}>{this.props.movie.isRented ? 'Return' : 'Rent'}</button>
            </div>
        )
    }
}
export default Movie