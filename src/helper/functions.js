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

export { checkCart, quantityCount, useTitle }