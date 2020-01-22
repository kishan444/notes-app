import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startRemoveNote } from '../../actions/notes'

function NoteList(props) {
    const handleDelete = (id) => {
        props.dispatch(startRemoveNote(id))
    }
    return (
        <React.Fragment>
            <h2>Listing - {props.notes.length}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Category</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.notes.map((note, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{note.title}</td>
                                    <td>{note.body}</td>
                                    <td>{note.category.name}</td>
                                    <td><Link to={`/notes/${note._id}`}>Edit</Link></td>
                                    <td><button onClick={ () => {
                                        handleDelete(note._id)
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br/>
            <Link to="/notes/new">Add note</Link>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteList)