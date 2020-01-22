import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveCategory } from '../../actions/categories';


function CategoryList(props) {
    const handleDelete = (id) => {
        props.dispatch(startRemoveCategory(id))
    }
    return (
        <React.Fragment>
            <h2>Categories - {props.categories.length}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map((category, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{category.name}</td>
                                    <td><Link to={`/categories/${category._id}`}>Edit</Link></td>
                                    <td><button onClick={ () => {
                                        handleDelete(category._id)
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br/>
            <Link to="/categories/new">Add category</Link>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoryList)