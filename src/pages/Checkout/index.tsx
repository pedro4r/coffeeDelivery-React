import { MapPinLine } from "@phosphor-icons/react";
import { AddressContainer, CartDetailsContainer, CheckoutContainer, ConfirmeOrderButton, DataContainer, FormContainer, OrderDetails, PaymentContainer, SelectedCoffeesContainer, TitleContainer } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { NewOrderForm } from "./components/NewOrderForm";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

const newOrderFormValidationSchema = zod.object({
    zipcode: zod.string().min(1, 'Enter the zipcode'),
    address: zod.string().min(1, 'Enter the address'),
    complement: zod.string().min(1, 'Enter the complement'),
    city: zod.string().min(1, 'Enter the city'),
    state: zod.string().min(1, 'Enter the state'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {

    const { insertAddress } = useContext(CoffeeContext)

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
    const isSubmitDisabled = Object.values(watchFields).some(value => !value);

    function handleCreateNewOrder(data: NewOrderFormData) {
        insertAddress(data);
    }

    return (
        <CheckoutContainer>
            <DataContainer>
                <strong>Complete your order</strong>
                <AddressContainer>
                    <TitleContainer>
                        <MapPinLine size={32} />
                        <div>
                            <span>Shipping Address</span>
                            <p>Provide the address where you'd like to receive your order.</p>
                        </div>
                    </TitleContainer>
                    <FormContainer>
                        <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
                            <FormProvider {...newOrderForm}>
                                <NewOrderForm />
                            </FormProvider>
                            <button disabled={isSubmitDisabled} type="submit">Confirme</button>
                        </form>
                    </FormContainer>
                </AddressContainer>
                <PaymentContainer></PaymentContainer>
            </DataContainer>
            <CartDetailsContainer>
                <strong>Selected Coffees</strong>
                <SelectedCoffeesContainer>
                </SelectedCoffeesContainer>
                <OrderDetails></OrderDetails>
                <ConfirmeOrderButton></ConfirmeOrderButton>
            </CartDetailsContainer>


        </CheckoutContainer>
    )
}