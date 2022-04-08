import { useEffect } from "react"

const checkCart = (state, title, color) => {
    const result = !!state.selectedItems.find(item => item.title === title && item.color.title === color)
    return result
}

const quantityCount = (state, title, color) => {
    const index = state.selectedItems.findIndex(item => item.title === title && item.color.title === color)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}

const useTitle = title => {
    useEffect(() => {
        document.title = title
    }, [title])
}

const validate = (data, type) => {
    const errors = {}

    if (!data.email) {
        errors.email = "لطفا ایمیل خود را وارد کنید"
    } else if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/.test(data.email)) {
        errors.email = "لطفا ایمیل خود را به صورت صحیح وارد کنید"
    } else {
        delete errors.email
    }

    if (type === "logIn") {
        if (!data.password) {
            errors.password = "لطفا پسوردتان را وارد کنید"
        } else if (data.password.length < 8 || data.password.length > 16) {
            errors.password = "پسورد باید بین 8 الی 16 کارکتر باشد"
        } else {
            delete errors.password
        }
    }

    if (type === "signUp") {

        if (!data.confirmPassword) {
            errors.confirmPassword = "لطفا پسورد را دوباره وارد کنید"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "پسورد همخوانی ندارد"
        } else {
            delete errors.confirmPassword
        }


        if (!data.userName.trim()) {
            errors.userName = "لطفا نام کاربری خود را وارد کنید"
        } else {
            delete errors.userName
        }

        if (!data.password) {
            errors.password = "لطفا پسوردتان را وارد کنید"
        } else if (data.password.length < 8 || data.password.length > 16) {
            errors.password = "پسورد باید بین 8 الی 16 کارکتر باشد"
        } else {
            delete errors.password
        }
    }

    if (type === "contact") {
        if (!data.name.trim()) {
            errors.name = "لطفا نام و نام خانوادگی خود را وارد کنید"
        } else {
            delete errors.userName
        }

        if (!data.message.trim()) {
            errors.message = "لطفا متن مورد نظر خود را وارد کنید"
        } else {
            delete errors.userName
        }

        if (!data.phoneNumber) {
            errors.phoneNumber = "لطفا شماره تلفن خود را وارد کنید"
        } else if (!/^\d{11}$/.test(data.phoneNumber)) {
            errors.phoneNumber = "لطفا شماره تلفن خود را  به صورت صحیح وارد کنید"
        } else {
            delete errors.userName
        }
    }

    return errors
}

export { checkCart, quantityCount, useTitle, validate }