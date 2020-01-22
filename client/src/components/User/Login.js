import React from 'react';
import { connect } from 'react-redux'
import { startSetUser } from '../../actions/user'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.dispatch(startSetUser(formData, this.props))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:<br/>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Password:<br/>
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label><br/><br/>
                    <input type="submit" value="Login" />
                </form>
            </React.Fragment>
        )
    }
}

export default connect()(Login)