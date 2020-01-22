import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import categoriesReducer from '../reducers/categoriesReducer'
import userReducer from '../reducers/userReducer'
import notesReducer from '../reducers/notesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        categories: categoriesReducer,
        notes: notesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore