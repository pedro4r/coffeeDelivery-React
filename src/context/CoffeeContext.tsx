import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { coffeeListArray } from '../coffeeList'

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

interface Order {
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

interface Cart {
    id: number;
    quantity: number;
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

    const [order, dispatch] = useReducer((state: Order, action: any) => {

        if (action.type === 'ADD_NEW_COFFEE') {
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

        if (action.type === 'REMOVE_COFFEE') {
            const id = action.payload.id;
            const cartCopy = [...state.cart];
            const newCart = cartCopy.filter(item => item.id !== id);

            return {
                ...state,
                cart: newCart
            };
        }

        if (action.type === 'CHANGE_PAYMENT') {

            return {
                ...state,
                payment: action.payload.option
            };
        }

        if (action.type === 'ADD_MORE_COFFEE') {

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

        if (action.type === 'ADD_LESS_COFFEE') {

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

        if (action.type === 'CREATE_NEW_ORDER') {

            const addressObject = action.payload.addressObject;

            return {
                ...state,
                address: {
                    ...addressObject
                }
            };

        }

        return state;
    }, initialOrderState);

    console.log(order);

    // const [order, setOrder] = useState<Order>({
    //     cart: [],
    //     address: {} as Address,
    //     payment: "credit card"
    // });

    const [cartQuantityCount, setCartQuantityCount] = useState(0);
    const [orderAmount, setOrderAmount] = useState(0);
    const [addressInputState, setAddressInputState] = useState<Address>({} as Address);

    function changeAddressInputState(addressObject: Address) {
        setAddressInputState(addressObject);
    }

    function setMoreCoffeeQuantity(id: number) {

        dispatch({
            type: 'ADD_MORE_COFFEE',
            payload: {
                id,
            }
        });

        // setOrder(order => {
        //     const cartCopy = [...order.cart];

        //     const newCart = cartCopy.map(item => {
        //         if (item.id === id) {
        //             return { ...item, quantity: item.quantity + 1 };
        //         }
        //         return item;
        //     });

        //     return {
        //         ...order,
        //         cart: newCart
        //     };
        // });
    }

    function setLessCoffeeQuantity(id: number) {

        dispatch({
            type: 'ADD_LESS_COFFEE',
            payload: {
                id,
            }
        });

        // setOrder(order => {
        //     const cartCopy = [...order.cart];

        //     const newCart = cartCopy.map(item => {
        //         if (item.id === id) {
        //             return { ...item, quantity: item.quantity - 1 };
        //         }
        //         return item;
        //     });

        //     return {
        //         ...order,
        //         cart: newCart
        //     };
        // });
    }

    function setRemoveCoffee(id: number) {

        dispatch({
            type: 'REMOVE_COFFEE',
            payload: {
                id,
            }
        });
        // setOrder(order => {
        //     const cartCopy = [...order.cart];
        //     const newCart = cartCopy.filter(item => item.id !== id);

        //     return {
        //         ...order,
        //         cart: newCart
        //     };
        // });
    }

    function createOrder(addressObject: Address) {

        dispatch({
            type: 'CREATE_NEW_ORDER',
            payload: {
                addressObject,
            }
        });
        // setOrder(order => ({
        //     ...order,
        //     address: {
        //         ...addressObject
        //     }
        // }));
    }

    function paymentOption(option: string) {

        dispatch({
            type: 'CHANGE_PAYMENT',
            payload: {
                option,
            }
        });
        // setOrder((order) => ({ ...order, payment: option }));
    }

    function addToCart(cartObject: Cart) {
        dispatch({
            type: 'ADD_NEW_COFFEE',
            payload: {
                cartObject,
            }
        });

        // setOrder(order => {
        //     const cartCopy = order.cart ? [...order.cart] : [];
        //     const coffeeIndex = cartCopy.findIndex(item => item.id === cartObject.id);

        //     if (coffeeIndex !== -1) {
        //         cartCopy[coffeeIndex].quantity += cartObject.quantity;
        //     } else {
        //         cartCopy.push(cartObject);
        //     }

        //     return {
        //         ...order,
        //         cart: cartCopy
        //     };
        // });

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
