import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import './User.css'

class User extends Component {
    render() {
        return (
        <div className='user'>
            <Button variant="contained" color="primary" className={this.props.user.color + " single-user"}>{this.props.user.name}</Button>
            <div></div>
        </div>)
    }
}
export default User