const localeState = () => {
    const state = localStorage.getItem('auth_info')
    let authInfo = {}
    if (state) {
        authInfo = JSON.parse(state)
    }
    return authInfo
}

const initialState = {
    loading: false,
    setLoggedIn: false,
    info: localeState()
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SIGNIN_REQUEST"):
            return {
                ...state,
                setLoggedIn: false,
                loading: true
            }
        case ("SIGNIN_SUCCESS"):
            return {
                ...state,
                setLoggedIn: false,
                loading: false,
                info: action.payload
            }
        case ("SIGNIN_FAILURE"):
            return {
                ...state,
                setLoggedIn: false,
                loading: false,
                info: {}
            }
        case ("LOGIN_REQUEST"):
            return {
                ...state,
                setLoggedIn: false,
                loading: true
            }
        case ("LOGIN_SUCCESS"):
            localStorage.setItem('auth_info', JSON.stringify(action.payload))
            return {
                ...state,
                setLoggedIn: true,
                loading: false,
                info: action.payload
            }
        case ("LOGIN_FAILURE"):
            return {
                ...state,
                setLoggedIn: false,
                loading: false,
            }

        default:
            return state
    }
}

export default authReducer
