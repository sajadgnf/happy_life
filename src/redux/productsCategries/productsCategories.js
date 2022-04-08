const category = JSON.parse(localStorage.getItem('section'))

export const productsCategories = (state = category, action) => {
    switch (action.type) {
        case "MOBILES":
            localStorage.setItem("section", JSON.stringify("mobiles"))
            return state = "mobiles"
        case "ACCESSORIES":
            localStorage.setItem("section", JSON.stringify("accessories"))
            return state = "accessories"
        case "HEADPHONES":
            localStorage.setItem("section", JSON.stringify("headphones"))
            return state = "headphones"
        case "AMAZING":
            localStorage.setItem("section", JSON.stringify("amazing"))
            return state = "amazing"
        case "MOST-VISITED":
            localStorage.setItem("section", JSON.stringify("most-visited"))
            return state = "most-visited"
        case "MOST-SALES":
            localStorage.setItem("section", JSON.stringify("most-sales"))
            return state = "most-sales"
        default:
            return state
    }
}