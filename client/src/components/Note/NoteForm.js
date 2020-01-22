import React from 'react';
import { connect } from 'react-redux'

class NoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title || '',
            body: this.props.body || '',
            category: this.props.category ? this.props.category._id : '',
            categories: props.categories || []
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }
        this.props.handleSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title<br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Body<br/>
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        category<br/>
                        <select name="category" value={this.state.category} onChange={this.handleChange}>
                            <option>select</option>
                            {
                                this.state.categories.map(category => {
                                    return <option key={category._id} value={category._id}>{category.name}</option>
                                })
                            }
                        </select>
                    </label><br/>
                    <br />
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(NoteForm)