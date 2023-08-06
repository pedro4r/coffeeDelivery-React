import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/coffeeDelivery-React/" element={<DefaultLayout />}>
                <Route path="/coffeeDelivery-React/" element={<Home />} />
                <Route path="/coffeeDelivery-React/checkout" element={<Checkout />} />
                <Route path="/coffeeDelivery-React/success" element={<Success />} />
            </Route>
        </Routes>
    )
}