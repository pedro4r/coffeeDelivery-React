import { ActionTypes } from "./actions";
import { produce } from 'immer'

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

export function orderReducer(state: Order, action: any) {

    switch (action.type) {

        case ActionTypes.ADD_NEW_COFFEE: {

            return produce(state, draft => {

                const cartObject = action.payload.cartObject;

                const coffeeIndex = draft.cart.findIndex((item) => {
                    return item.id === cartObject.id
                });

                if (coffeeIndex !== -1) {
                    draft.cart[coffeeIndex].quantity += cartObject.quantity;
                } else {
                    draft.cart.push(cartObject);
                }
            })

        }

        case ActionTypes.REMOVE_COFFEE: {
            return produce(state, draft => {
                const id = action.payload.id;

                draft.cart = draft.cart.filter(item => {
                    return item.id !== id;
                });
            })
        }

        case ActionTypes.CHANGE_PAYMENT: {
            return produce(state, draft => {
                draft.payment = action.payload.option
            })
        }

        case ActionTypes.SET_MORE_COFFEE: {

            return produce(state, draft => {

                const id = action.payload.id;

                draft.cart = draft.cart.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            })

        }

        case ActionTypes.SET_LESS_COFFEE: {

            return produce(state, draft => {

                const id = action.payload.id;

                draft.cart = draft.cart.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
            })
        }

        case ActionTypes.CREATE_NEW_ORDER: {

            return produce(state, draft => {
                const addressObject = action.payload.addressObject;
                draft.address = addressObject;
            })
        }

    }

    return state;
}