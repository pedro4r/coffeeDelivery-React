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

    const { addressInputState, changeAddressInputState, createOrder, paymentOption, order: { payment, cart }, orderAmount } = useContext(CoffeeContext)

    const { address, complement, city, state, zipcode } = addressInputState

    const newOrderForm = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zipcode: zipcode,
            address: address,
            complement: complement,
            city: city,
            state: state,
        },
    })

    const { handleSubmit, watch } = newOrderForm;

    const watchFields = watch(['zipcode', 'address', 'complement', 'city', 'state']);
    const isSubmitDisabled = Object
        .values(watchFields)
        .some(value => !value || (cart ?? []).length === 0);

    function handleNewAddress(data: NewOrderFormData) {
        createOrder(data);
    }

    const handlePaymentOption = (option: string) => {
        paymentOption(option);
    };

    function onChangeInputWatched() {
        const inputFieldsWatched = {
            zipcode: watch('zipcode'),
            address: watch('address'),
            complement: watch('complement'),
            city: watch('city'),
            state: watch('state')
        }
        changeAddressInputState(inputFieldsWatched)
    }

    return (
        <CheckoutContainer>
            <form onChange={onChangeInputWatched} onSubmit={handleSubmit(handleNewAddress)} action="">
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
                        {(cart ?? []).map((coffee) => (
                            <SelectedCoffee
                                key={coffee.id}
                                id={coffee.id}
                                quantity={coffee.quantity} />
                        ))}
                        <OrderDetails>
                            <div>
                                <span>Total itens</span>
                                <span>U$ {parseFloat((orderAmount).toFixed(2))}</span>
                            </div>
                            <div>
                                <span>Delivery</span>
                                <span>U$ {(cart && cart.length > 0) ? '3.50' : '0'}</span>
                            </div>
                            <div>
                                <strong>Total</strong>
                                <strong>U$ {(cart && cart.length > 0) ? parseFloat((orderAmount + 3.50).toFixed(2)) : '0'}</strong>
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