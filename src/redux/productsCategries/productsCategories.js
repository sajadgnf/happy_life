const category = 'mobile'

export const productsCategories = (state = category, action) => {
    switch (action.type) {
        case "MOBILES":
            return  state= "mobiles" 
        case "ACCESSORIES":
            return  state= "accessories" 
        case "HEADPHONES":
            return  state= "headphones" 
        case "AMAZING":
            return  state= "amazing" 
        case "MOST-VISITED":
            return state= "most-visited" 
        case "MOST-SALES":
            return state= "most-sales" 
        default:
            return state
    }
}