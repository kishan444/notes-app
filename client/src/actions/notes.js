import axios from '../config/axios'

export const setNotes = (notes) => {
    return {
        type: 'SET_NOTES',
        payload: notes
    }
}

export const startSetNotes = () => {
    return (dispatch) => {
        axios.get('/notes', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === "JsonWebTokenError"){
                    window.alert(response.data.message)
                } else {
                    dispatch(setNotes(response.data))
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const addNOte = (formData) => {
    return {
        type: 'ADD_NOTE',
        payload: formData
    }
}

export const startAddNote = (formData, props) => {
    return (dispatch) => {
        axios.post('/notes', formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === 'JsonWebTokenError'){
                    window.alert(response.data.message)
                } else {
                    window.alert('successfully created')
                    dispatch(addNOte(response.data))
                    props.history.push('/notes')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const updateNote = (formData) => {
    return {
        type: 'UPDATE_NOTE',
        payload: formData
    }
}

export const startUpdateNote = (formData, props) => {
    return (dispatch) => {
        axios.put(`/notes/${props.match.params.id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === 'JsonWebTokenError'){
                    window.alert(response.data.message)
                } else {
                    window.alert('successfully created')
                    dispatch(updateNote(response.data))
                    props.history.push('/notes')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const removeNote = (id) => {
    return {
        type: 'REMOVE_NOTE',
        payload: id
    }
}

export const startRemoveNote = (id) => {
    return (dispatch) => {
        axios.delete(`/notes/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.name === 'JsonWebTokenError'){
                    window.alert(response.data.message)
                } else {
                    window.alert('Successfully Removed')
                    dispatch(removeNote(id))
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}