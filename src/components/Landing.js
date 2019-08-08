import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import User from './User';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
        <div className='landing'>
            <h2 id="landing-heading">Who's Watching?</h2>
            <div className="users">
            {this.props.users.map(u => { 
                return (
                    <Link key={u.name} to='/catalog' className="user-box">
                        <User user={u} />
                    </Link>
                )
            })}
            </div>
        </div>
        )
    }
}
export default Landing