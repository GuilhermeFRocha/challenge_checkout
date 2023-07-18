import Banner from "../../components/Banner";
import CheckoutForm from "../../components/CheckoutForm";
import { CheckoutContainer } from "./styled";

export default function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <Banner />
    </CheckoutContainer>
  );
}
