import React, {Component, Fragment} from 'react'
import './Catalog.css'
import { withStyles } from '@material-ui/core/styles'
import { Input, Container, Button, Typography, Grid, Box } from '@material-ui/core';
import Movie from './Movie';
import { border } from '@material-ui/system';

const TextField = withStyles({
    root: {
      '& .MuiInput-underline:after': {
        borderBottomColor: '#222',
      }
    }
})

const style = {
    heading: {
        marginTop: 50,
        marginBottom: 50
    }
}

class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            matchingSearch: [...this.props.catalog]
        }
    }

    handleInput = e => {
        const value = e.target.value
        const name = e.target.name
        this.setState({[name]: value}, this.runSearch)
    }

    runSearch = () => {
        const matchingSearch = this.props.catalog.filter(m => m.title.toLowerCase().includes(this.state.search.toLowerCase()))
        this.setState({matchingSearch})
    }

    render() {
        return (
        <Container className='catalog'>
            <Typography variant='h2' align='center' style={style.heading} m={2}>Catalog</Typography>
            <Input id="search-input" type='search' value={this.state.search} name="search" placeholder="Search..." fullWidth={true} onChange={this.handleInput} />
            {this.state.matchingSearch.find(m => m.isRented) ?
            <Fragment>
                <Typography variant='h3' align='center'>Rented Movies</Typography>
                <Box className='rented-movies'>
                    {this.state.matchingSearch.filter(m => m.isRented).map(m => {
                        return (
                            <Movie key={m.id} movie={m} handleActionBtn={this.props.handleActionBtn} />
                            )
                        })}
                </Box>
            </Fragment>
            : null}
            <Box className='movies-box'>
                {this.state.matchingSearch.filter(m => !m.isRented).map(m => {
                    return (
                        <Movie key={m.id} movie={m} handleActionBtn={this.props.handleActionBtn} />
                    )
                })}
            </Box>
        </Container>
        )
    }
}
export default Catalog