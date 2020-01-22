import axios from '../config/axios'

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const startRegisterUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/user/register', formData)
            .then((response) => {
                const data = response.data
                if(data.hasOwnProperty('errors')){
                    window.alert(data.message)
                } else if(data.hasOwnProperty('errmsg')){
                    window.alert(data.errmsg)
                } else {
                    window.alert('Successfully Registered')
                    dispatch(setUser({}))
                    props.history.push('/user/login')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const startSetUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/user/login', formData)
            .then((response) => {
                const { userInfo, token } = response.data
                if(token){
                    localStorage.setItem('x-auth', token)
                    dispatch(setUser(userInfo))
                    props.history.push('/')
                } else {
                    window.alert(response.data)
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const startRemoveUser = () => {
    return (dispatch) => {
        axios.delete('/user/logout', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                window.alert(response.data.notice)
                localStorage.clear('x-auth')
                dispatch(setUser({}))
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}