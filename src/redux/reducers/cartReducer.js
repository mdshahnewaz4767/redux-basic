import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
    cart: [],
    products: [{name: 'Asus Laptop', id: 1},
    {name: 'Apple Laptop', id: 2},
    {name: 'Lenovo Laptop', id: 3},
    {name: 'Dell Laptop', id: 4},
    {name: 'HP Laptop', id: 5}]
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};
        case REMOVE_FROM_CART:
            console.log(action);
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart};
        default:
            return state;
    }
}

export default cartReducer;