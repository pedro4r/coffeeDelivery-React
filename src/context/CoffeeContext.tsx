import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { coffeeListArray } from '../coffeeList'
import { Address, Cart, Coffee, Order, orderReducer } from "../reducers/order/reducer";
import { addNewCoffee, editPayment, lessCoffeeQuantity, moreCoffeeQuantity, newOrder, removeCoffee } from "../reducers/order/actions";

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

    console.log(order);

    const [cartQuantityCount, setCartQuantityCount] = useState(0);
    const [orderAmount, setOrderAmount] = useState(0);
    const [addressInputState, setAddressInputState] = useState<Address>({} as Address);

    function changeAddressInputState(addressObject: Address) {
        setAddressInputState(addressObject);
    }

    function addToCart(cartObject: Cart) {
        dispatch(addNewCoffee(cartObject));
    }

    function setMoreCoffeeQuantity(id: number) {
        dispatch(moreCoffeeQuantity(id));
    }

    function setLessCoffeeQuantity(id: number) {
        dispatch(lessCoffeeQuantity(id));
    }

    function setRemoveCoffee(id: number) {
        dispatch(removeCoffee(id));
    }

    function createOrder(addressObject: Address) {
        dispatch(newOrder(addressObject));
    }

    function paymentOption(option: string) {
        dispatch(editPayment(option));
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
