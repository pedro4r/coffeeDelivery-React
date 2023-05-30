export interface Order {
    cart: Cart[],
    address: Address,
    payment: string,
}

export interface Coffee {
    id: number;
    name: string;
    coffeeTag: string[];
    description: string;
    price: number;
    image: string;
}

export interface Address {
    zipcode: string;
    address: string;
    complement: string;
    city: string;
    state: string;
}

export interface Cart {
    id: number;
    quantity: number;
}

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    CHANGE_PAYMENT = 'CHANGE_PAYMENT',
    SET_MORE_COFFEE = 'SET_MORE_COFFEE',
    SET_LESS_COFFEE = 'SET_LESS_COFFEE',
    CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'
}

export function orderReducer(state: Order, action: any) {

    switch (action.type) {

        case ActionTypes.ADD_NEW_COFFEE: {
            const cartObject = action.payload.cartObject;

            const cartCopy = state.cart ? [...state.cart] : [];
            const coffeeIndex = cartCopy.findIndex(item => item.id === cartObject.id);

            if (coffeeIndex !== -1) {
                cartCopy[coffeeIndex].quantity += cartObject.quantity;
            } else {
                cartCopy.push(cartObject);
            }

            return {
                ...state,
                cart: cartCopy
            };


        }

        case ActionTypes.REMOVE_COFFEE: {
            {
                const id = action.payload.id;
                const cartCopy = [...state.cart];
                const newCart = cartCopy.filter(item => item.id !== id);

                return {
                    ...state,
                    cart: newCart
                };
            }
        }

        case ActionTypes.CHANGE_PAYMENT: {
            return {
                ...state,
                payment: action.payload.option
            };
        }

        case ActionTypes.SET_MORE_COFFEE: {
            const id = action.payload.id;
            const cartCopy = [...state.cart];

            const newCart = cartCopy.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return {
                ...state,
                cart: newCart
            };
        }

        case ActionTypes.SET_LESS_COFFEE: {
            const id = action.payload.id;
            const cartCopy = [...state.cart];

            const newCart = cartCopy.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

            return {
                ...state,
                cart: newCart
            };
        }

        case ActionTypes.CREATE_NEW_ORDER: {
            const addressObject = action.payload.addressObject;

            return {
                ...state,
                address: {
                    ...addressObject
                }
            };
        }

    }

    return state;
}