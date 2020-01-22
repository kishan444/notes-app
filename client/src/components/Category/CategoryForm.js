import React from 'react';

export default class CategoryForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name || ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formDate = {
            name: this.state.name
        }
        this.props.handleSubmit(formDate)
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    Name: <br/>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <br/><br/>
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}
