import React, {Component} from 'react'
import './Catalog.css'
import { Input } from '@material-ui/core';

class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            search: ''
        }
    }

    handleInput = e => {
        const value = e.target.value
        const name = e.target.name
        this.setState({[name]: value})
    }

    runSearch = e => {
        if(e.key === 'Enter'){
            console.log('Searching for ' + this.state.search)
            this.setState({search: ''})
        }

    }

    render() {
        return (
        <div className='catalog'>
            <h2 id="catalog-heading">Catalog</h2>
            <Input id="search-input" type='search' value={this.state.search} name="search" placeholder="Search..." fullWidth={true} onChange={this.handleInput} onKeyDown={this.runSearch} />
        </div>)
    }
}
export default Catalog