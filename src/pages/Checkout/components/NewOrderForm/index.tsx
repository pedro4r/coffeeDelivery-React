import { useFormContext } from "react-hook-form";
import { AddressInput, CityInput, ComplementInput, OrderForm, StateInput, ZipCodeInput } from "./styles";

export function NewOrderForm() {
    const { register } = useFormContext()
    return (
        <OrderForm>
            <ZipCodeInput
                id="zipcode"
                placeholder="Zipcode"
                // disabled={!!activeCycle}
                {...register('zipcode')}
            />
            <AddressInput
                id="address"
                placeholder="Address"
                // disabled={!!activeCycle}
                {...register('address')}
            />
            <ComplementInput
                id="complement"
                placeholder="Complement"
                // disabled={!!activeCycle}
                {...register('complement')}
            />
            <CityInput
                id="city"
                placeholder="City"
                // disabled={!!activeCycle}
                {...register('city')}
            />
            <StateInput
                id="state"
                placeholder="State"
                // disabled={!!activeCycle}
                {...register('state')}
            />
        </OrderForm>
    )
}