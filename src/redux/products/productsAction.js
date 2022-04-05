import axios from 'axios'

const fetchProductsRequest = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST',
    }
}

const fetchProductsSuccess = products => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    }
}

const fetchProductsFailure = error => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    }
}

const BASE_URL = "https://happy-life-api.herokuapp.com"

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest())
        axios.all([
            axios.get(`${BASE_URL}/mobiles`),
            axios.get(`${BASE_URL}/accessories`),
            axios.get(`${BASE_URL}/headphones`),
            axios.get(`${BASE_URL}/amazing`),
            axios.get(`${BASE_URL}/most-visited`),
            axios.get(`${BASE_URL}/most-sales`),

        ])
            .then(
                axios.spread((mobiles, accessories, headphones, amazing, mostVisited, mostSales) => {
                    const products = {
                        mobiles: mobiles.data,
                        accessories: accessories.data,
                        headphones: headphones.data,
                        amazing: amazing.data,
                        mostVisited: mostVisited.data,
                        mostSales: mostSales.data
                    }
                    dispatch(fetchProductsSuccess(products))
                })
            )
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchProductsFailure(errorMessage))
            })
    }
}