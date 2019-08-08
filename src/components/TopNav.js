import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './TopNav.css'
import { Container } from '@material-ui/core';

class TopNav extends Component {
    render() {
        return (
        <Container className='top-nav'>
            <Link to='/' className="home-link">Home</Link>
            <Link to='/catalog' className="catalog-link">Catalog</Link>
            <div id="logo">REFLIX</div>
        </Container>
        )
    }
}
export default TopNav