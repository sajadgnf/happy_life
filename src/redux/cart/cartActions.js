const addItem = (product, color) => {
    return {
        type: "ADD_ITEM",
        payload: product,
        color: color
    }
}
const increase = (product, color) => {
    return {
        type: "INCREASE",
        payload: product,
        color: color
    }
}
const decrease = (product, color) => {
    return {
        type: "DECREASE",
        payload: product,
        color: color
    }
}
const removeItem = (product, color) => {
    return {
        type: "REMOVE_ITEM",
        payload: product,
        color: color
    }
}
const checkout = () => {
    return {
        type: "CHECKOUT"
    }
}
const clear = () => {
    return {
        type: "CLEAR"
    }
}

export { addItem, increase, decrease, removeItem, checkout, clear }