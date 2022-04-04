const initialState = {
    selectedItems: [],
    total: 0,
    itemsCounter: 0,
    checkout: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    const total = items.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2)
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

            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item => item.title === action.payload.title && item.color.title === action.color.title)
            state.selectedItems[indexI].quantity++
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item => item.title === action.payload.title && item.color.title === action.color.title)
            state.selectedItems[indexD].quantity--
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                total: 0,
                itemsCounter: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                total: 0,
                itemsCounter: 0,
                checkout: false
            }
        default:
            return state
    }
}

export default cartReducer