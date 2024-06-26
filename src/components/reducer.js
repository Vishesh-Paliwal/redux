import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
    items: {},
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;
            const quantity = state.items[product.id]?.quantity || 0;
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: { ...product, quantity: quantity + 1 },
                },
            };
        }
        case REMOVE_FROM_CART: {
            const product = action.payload;
            const quantity = state.items[product.id]?.quantity || 0;
            if (quantity <= 1) {
                const { [product.id]: removed, ...rest } = state.items;
                return {
                    ...state,
                    items: rest,
                };
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: { ...product, quantity: quantity - 1 },
                },
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
