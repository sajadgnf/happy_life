const initialList = () => {
    const list = localStorage.getItem('cart_list')
    let cartList = []
    if (list) {
        cartList = JSON.parse(list)
    }
    return cartList
}

const initialState = {
    selectedItems: initialList(),
    total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0,
    itemsCounter: localStorage.getItem('itemsCounter') ? JSON.parse(localStorage.getItem('itemsCounter')) : 0,
    checkout: localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : true
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    const total = items.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2)

    localStorage.setItem("itemsCounter", JSON.stringify(itemsCounter))
    localStorage.setItem("total", JSON.stringify(total))
    return { itemsCounter, total }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.title === action.payload.title && item.color.title === action.color.title)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                    color: action.color,
                    ...state.itemsCounter
                })
            }
            localStorage.setItem("cart_list", JSON.stringify(state.selectedItems))
            localStorage.setItem("checkout", JSON.stringify(false))
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
                ...sumItems(state.selectedItems)
            }
        case 'REMOVE_ITEM':
            const checkSelectedItems = state.selectedItems.filter(item => item.title !== action.payload.title)
            const checkColor = state.selectedItems.filter(item => item.title === action.payload.title).filter(item => item.color.title !== action.color.title)
            const newSelectedItems = [...checkSelectedItems, ...checkColor]
            localStorage.setItem("cart_list", JSON.stringify(newSelectedItems))
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item => item.title === action.payload.title && item.color.title === action.color.title)
            state.selectedItems[indexI].quantity++
            localStorage.setItem("cart_list", JSON.stringify(state.selectedItems))
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item => item.title === action.payload.title && item.color.title === action.color.title)
            state.selectedItems[indexD].quantity--
            localStorage.setItem("cart_list", JSON.stringify(state.selectedItems))
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            localStorage.setItem("cart_list", JSON.stringify([]))
            localStorage.setItem("checkout", JSON.stringify(true))
            return {
                selectedItems: [],
                total: 0,
                itemsCounter: 0,
                checkout: true
            }
        default:
            return state
    }
}

export default cartReducer