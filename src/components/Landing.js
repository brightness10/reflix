import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import User from './User';
import './Landing.css'
import { Container, Typography, spacing } from '@material-ui/core';

const style = {
    heading: {
        marginTop: 50,
        marginBottom: 50
    }
}

class Landing extends Component {
    constructor(){
        super()
        this.state = {
          users: [
            {name: 'Zohar', color: 'torquise'},
            {name: 'Rudolf', color: 'grey'},
            {name: 'Bijo', color: 'yellow'},
            {name: 'Alex', color: 'blue'},
            {name: 'Sergey', color: 'green'},
          ]
        }
      }
    render() {
        return (
        <Container className='landing'>
            <Typography id="landing-heading" variant='h2' align='center' my={4} style={style.heading}>Who's Watching?</Typography>
            <div className="users">
            {this.state.users.map(u => { 
                return (
                    <Link key={u.name} to='/catalog' className="user-box">
                        <User user={u} />
                    </Link>
                )
            })}
            </div>
        </Container>
        )
    }
}
export default Landing