import { Address, Cart } from "./reducer";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    CHANGE_PAYMENT = 'CHANGE_PAYMENT',
    SET_MORE_COFFEE = 'SET_MORE_COFFEE',
    SET_LESS_COFFEE = 'SET_LESS_COFFEE',
    CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'
}

export function addNewCoffee(cartObject: Cart) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            cartObject,
        }
    }
}

export function moreCoffeeQuantity(id: number) {
    return {
        type: ActionTypes.SET_MORE_COFFEE,
        payload: {
            id,
        }
    }
}

export function lessCoffeeQuantity(id: number) {
    return {
        type: ActionTypes.SET_LESS_COFFEE,
        payload: {
            id,
        }
    }
}

export function removeCoffee(id: number) {
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: {
            id,
        }
    }
}

export function newOrder(addressObject: Address) {
    return {
        type: ActionTypes.CREATE_NEW_ORDER,
        payload: {
            addressObject,
        }
    }
}

export function editPayment(option: string) {
    return {
        type: ActionTypes.CHANGE_PAYMENT,
        payload: {
            option,
        }
    }
}


