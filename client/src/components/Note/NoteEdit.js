import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux'
import { startUpdateNote } from '../../actions/notes'

function NoteEdit(props) {
    const handleSubmit = (formData) => {
        props.dispatch(startUpdateNote(formData, props))
    }
    return (
        <React.Fragment>
            <h2>Edit</h2>
            { props.note && <NoteForm {...props.note} handleSubmit={handleSubmit} />}
        </React.Fragment>
    )
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find(note => note._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(NoteEdit)