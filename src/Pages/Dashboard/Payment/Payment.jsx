import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subheading={"Please Process"}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
