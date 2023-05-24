import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { AddressContainer, CartDetailsContainer, CheckoutContainer, ConfirmeOrderButton, DataContainer, FormContainer, OptionsContainer, OrderDetails, PaymentButton, PaymentContainer, SelectedCoffeesContainer, TitleContainerPayment, TitleContainerShipping } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { NewOrderForm } from "./components/NewOrderForm";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { SelectedCoffee } from "./components/SelectedCoffee";

const newOrderFormValidationSchema = zod.object({
    zipcode: zod.string().min(1, 'Enter the zipcode'),
    address: zod.string().min(1, 'Enter the address'),
    complement: zod.string().min(1, 'Enter the complement'),
    city: zod.string().min(1, 'Enter the city'),
    state: zod.string().min(1, 'Enter the state'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {

    const { insertAddress, paymentOption, payment, cart, order } = useContext(CoffeeContext)

    const newOrderForm = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zipcode: '',
            address: '',
            complement: '',
            city: '',
            state: '',
        },
    })

    const { handleSubmit, watch } = newOrderForm;

    const watchFields = watch(['zipcode', 'address', 'complement', 'city', 'state']);
    const isSubmitDisabled = Object.values(watchFields).some(value => !value || cart.length === 0);


    function handleCreateNewOrder(data: NewOrderFormData) {
        insertAddress(data);
    }

    const handlePaymentOption = (option: string) => {
        paymentOption(option);
    };

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
                <DataContainer>
                    <strong>Complete your order</strong>
                    <AddressContainer>
                        <TitleContainerShipping>
                            <MapPinLine size={32} />
                            <div>
                                <span>Shipping Address</span>
                                <p>Provide the address where you'd like to receive your order</p>
                            </div>
                        </TitleContainerShipping>
                        <FormContainer>
                            <FormProvider {...newOrderForm}>
                                <NewOrderForm />
                            </FormProvider>
                        </FormContainer>
                    </AddressContainer>
                    <PaymentContainer>
                        <TitleContainerPayment>
                            <CurrencyDollar size={32} />
                            <div>
                                <span>Payment</span>
                                <p>Payment is made upon delivery. Choose the payment method you prefer</p>
                            </div>
                        </TitleContainerPayment>
                        <OptionsContainer>
                            <PaymentButton
                                selected={payment === 'credit card'}
                                onClick={() => handlePaymentOption('credit card')}>
                                <CreditCard size={16} />
                                <span>CREDIT CARD</span>
                            </PaymentButton>
                            <PaymentButton
                                selected={payment === 'debit card'}
                                onClick={() => handlePaymentOption('debit card')}>
                                <Bank size={16} />
                                <span>DEBIT CARD</span>
                            </PaymentButton>
                            <PaymentButton
                                selected={payment === 'cash'}
                                onClick={() => handlePaymentOption('cash')}>
                                <Money size={16} />
                                <span>CASH</span>
                            </PaymentButton>
                        </OptionsContainer>
                    </PaymentContainer>
                </DataContainer>
                <CartDetailsContainer>
                    <strong>Selected Coffees</strong>
                    <SelectedCoffeesContainer>
                        {cart.map((coffee) => (
                            <SelectedCoffee
                                key={coffee.id}
                                id={coffee.id}
                                quantity={coffee.quantity} />
                        ))}
                        <OrderDetails>
                            <div>
                                <span>Total itens</span>
                                <span>U$ {order.total}</span>
                            </div>
                            <div>
                                <span>Delivery</span>
                                <span>U$ {cart.length === 0 ? `0` : `3.50`}</span>
                            </div>
                            <div>
                                <strong>Total</strong>
                                <strong>U$ {cart.length === 0 ? `0` : parseFloat((order.total + 3.50).toFixed(2))}</strong>
                            </div>
                        </OrderDetails>
                        <ConfirmeOrderButton disabled={isSubmitDisabled} type="submit">
                            <span>CONFIRME ORDER</span>
                        </ConfirmeOrderButton>
                    </SelectedCoffeesContainer>

                </CartDetailsContainer>
            </form >
        </CheckoutContainer >
    )
}