import React, {Component} from 'react'
import './MovieDetails.css'
import { Typography } from '@material-ui/core'

const style = {
    heading: {
        marginTop: 50,
        marginBottom: 50
    }
}

class MovieDetails extends Component {
    constructor(){
        super()
        this.state = {
        }
    }
    render() {
        const movieId = this.props.match.params.id
        const relMovie = this.props.catalog.find(m => m.id == movieId)
        
        return (
        <div className='movie-details'>
            <Typography variant="h2" id='movie-heading' style={style.heading}>{relMovie.title}</Typography>
            <img src={relMovie.img} alt={relMovie.title} className='movie-img'/>
            <Typography variant="h4" id='movie-title'> <span id='movie-year'>({relMovie.year})</span></Typography>
            <Typography variant="body1" id='movie-description'>{relMovie.descrShort}</Typography>
        </div>)
    }
}
export default MovieDetails