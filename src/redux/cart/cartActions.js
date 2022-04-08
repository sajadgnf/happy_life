const addItem = (product, color, section) => {
    return {
        type: "ADD_ITEM",
        payload: product,
        color: color,
        section: section
    }
}
const increase = (product, color, section) => {
    return {
        type: "INCREASE",
        payload: product,
        color: color,
        section: section
    }
}
const decrease = (product, color, section) => {
    return {
        type: "DECREASE",
        payload: product,
        color: color,
        section: section
    }
}
const removeItem = (product, color, section) => {
    return {
        type: "REMOVE_ITEM",
        payload: product,
        color: color,
        section: section
    }
}
const checkout = () => {
    return {
        type: "CHECKOUT"
    }
}

export { addItem, increase, decrease, removeItem, checkout }