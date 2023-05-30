import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { coffeeListArray } from '../coffeeList'
import { ActionTypes, Address, Cart, Coffee, Order, orderReducer } from "../reducers/order";

interface CoffeeContextType {
    coffeeListArray: Coffee[];
    addToCart: (cartObject: Cart) => void;
    setMoreCoffeeQuantity: (id: number) => void;
    setLessCoffeeQuantity: (id: number) => void;
    setRemoveCoffee: (id: number) => void;
    createOrder: (address: Address) => void;
    changeAddressInputState: (address: Address) => void;
    paymentOption: (option: string) => void;
    cartQuantityCount: number;
    order: Order;
    orderAmount: number;
    addressInputState: Address;
}

interface CoffeeContextProviderProps {
    children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {

    const initialOrderState: Order = {
        cart: [],
        address: {} as Address,
        payment: "credit card"
    };

    const [order, dispatch] = useReducer(orderReducer, initialOrderState);

    const [cartQuantityCount, setCartQuantityCount] = useState(0);
    const [orderAmount, setOrderAmount] = useState(0);
    const [addressInputState, setAddressInputState] = useState<Address>({} as Address);

    function changeAddressInputState(addressObject: Address) {
        setAddressInputState(addressObject);
    }

    function setMoreCoffeeQuantity(id: number) {

        dispatch({
            type: ActionTypes.SET_MORE_COFFEE,
            payload: {
                id,
            }
        });
    }

    function setLessCoffeeQuantity(id: number) {
        dispatch({
            type: ActionTypes.SET_LESS_COFFEE,
            payload: {
                id,
            }
        });
    }

    function setRemoveCoffee(id: number) {
        dispatch({
            type: ActionTypes.REMOVE_COFFEE,
            payload: {
                id,
            }
        });
    }

    function createOrder(addressObject: Address) {
        dispatch({
            type: ActionTypes.CREATE_NEW_ORDER,
            payload: {
                addressObject,
            }
        });
    }

    function paymentOption(option: string) {
        dispatch({
            type: ActionTypes.CHANGE_PAYMENT,
            payload: {
                option,
            }
        });
    }

    function addToCart(cartObject: Cart) {
        dispatch({
            type: ActionTypes.ADD_NEW_COFFEE,
            payload: {
                cartObject,
            }
        });
    }

    useEffect(() => {

        const amountQuantity = (order.cart ?? []).reduce((acc, coffeObject) => {
            return acc + coffeObject.quantity;
        }, 0);

        setCartQuantityCount(amountQuantity);

        const orderAmount = (order.cart ?? []).reduce((acc, cartObject) => {
            coffeeListArray.find(coffee => {
                if (coffee.id === cartObject.id) {
                    const subtotal = cartObject.quantity * coffee.price
                    return acc += subtotal
                }
            })
            return acc
        }, 0);

        setOrderAmount(orderAmount);

    }, [order])

    useEffect(() => {
        const stateJSON = JSON.stringify(order)
        localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
    }, [order])

    return (
        <CoffeeContext.Provider
            value={{
                coffeeListArray,
                addToCart,
                cartQuantityCount,
                createOrder,
                paymentOption,
                setMoreCoffeeQuantity,
                setLessCoffeeQuantity,
                setRemoveCoffee,
                order,
                orderAmount,
                changeAddressInputState,
                addressInputState
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}
