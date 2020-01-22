import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startRemoveUser } from '../../actions/user'
import _ from 'lodash'

function Home(props) {
    const handleLogout = () => {
        props.dispatch(startRemoveUser())
    }
    return (
        <React.Fragment>
            <h3>Welcome to the phonebook</h3>
            <ul>
                {
                    localStorage.getItem('x-auth') ? (
                        <React.Fragment>
                            <li><button onClick={handleLogout}>Logout</button></li>
                            <li><Link to="/notes">Notes</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <li><Link to="/user/register">Register</Link></li>
                            <li><Link to="/user/login">Login</Link></li>
                        </React.Fragment>
                    )
                }
            </ul>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)