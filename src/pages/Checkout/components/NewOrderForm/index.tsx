import { useFormContext } from "react-hook-form";
import { AddressInput, CityInput, ComplementInput, OrderForm, StateInput, ZipCodeInput } from "./styles";

export function NewOrderForm() {

    const { register } = useFormContext()

    return (
        <OrderForm>
            <ZipCodeInput
                id="zipcode"
                placeholder="Zipcode"
                {...register('zipcode')}
            />
            <AddressInput
                id="address"
                placeholder="Address"
                {...register('address')}
            />
            <ComplementInput
                id="complement"
                placeholder="Complement"
                {...register('complement')}
            />
            <CityInput
                id="city"
                placeholder="City"
                {...register('city')}
            />
            <StateInput
                id="state"
                placeholder="State"
                {...register('state')}
            />
        </OrderForm>
    )
}