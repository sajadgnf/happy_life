import { notify } from "../../components/shared/Toast"

const signInRequest = () => {
    return {
        type: 'SIGNIN_REQUEST'
    }
}

const signInSuccess = () => {
    return {
        type: 'SIGNIN_SUCCESS',
    }
}

const signInFailure = () => {
    return {
        type: 'SIGNIN_FAILURE'
    }
}

const logInRequest = () => {
    return {
        type: 'LOGIN_REQUEST'
    }
}

const logInSuccess = info => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: info
    }
}

const logInFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
}

const BASE_URL = 'https://api.freerealapi.com/auth'

export const FetchSignIn = (information, errors, setTouched) => {
    return (dispatch) => {
        dispatch(signInRequest())
        fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: information.userName,
                email: information.email,
                password: information.password,
                confirmPassword: information.confirmPassword,
            })
        })
            .then((response) => {
                if (!Object.keys(errors).length && 200 <= response.status && response.status < 300) {
                    notify("حساب کاربری با موفقیت ساخته شد", "success")
                } else if (Object.keys(errors).length) {
                    notify("لطفا اطلاعات خود را با دقت وارد کنید", "error")
                    setTouched({
                        userName: true,
                        email: true,
                        password: true,
                        confirmPassword: true,
                    })
                }
                dispatch(signInSuccess())
                return response.json()
            })
            .then((json) => {
                if (json.message === "E-mail exist please try with another") {
                    notify("این ایمیل قبلا ثبت شده است ", "error")
                }
                else if (json.message === "Too many send request") {
                    notify("لطفا دقایقی دیگر اقدام فرمایید ", "error")
                }
                dispatch(signInFailure())
            })
    }
}

export const fetchLogin = (information, errors, setTouched) => {
    return (dispatch) => {
        dispatch(logInRequest())
        fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: information.email,
                password: information.password,
            })
        })
            .then((response) => {
                if (!Object.keys(errors).length && 200 <= response.status && response.status < 300) {
                    notify('شما با موفقیت وارد شدید', "success")
                    window.location.href = "/profile"
                    dispatch(logInSuccess(information))
                }
                else if (!Object.keys(errors).length) {
                    notify('ایمیل یا پسورد را به صورت اشتباه وارد کرده اید', "error")
                    dispatch(logInFailure())
                }
                else {
                    notify('لطفا اطلاعات خود را به صورت صحیح وارد نمایید', "error")
                    setTouched({
                        email: true,
                        password: true
                    })
                    dispatch(logInFailure())
                }
                return response.json()
            })
            .then((json) => console.log(json))
    }
}