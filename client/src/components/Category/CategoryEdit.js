import React from 'react';
import CategoryForm from './CategoryForm';
import { connect } from 'react-redux'
import { startUpdateCategory } from '../../actions/categories'
import _ from 'lodash'

function CategoryEdit(props) {
    const handleSubmit = (formData) => {
        props.dispatch(startUpdateCategory(formData, props))
    }
    return (
        <React.Fragment>
            <h2>Edit</h2>
            {!_.isEmpty(props.category) && < CategoryForm {...props.category} handleSubmit={handleSubmit} />}
        </React.Fragment>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        category: state.categories.find(category => category._id === id)
    }
}

export default connect(mapStateToProps)(CategoryEdit)