import Pay from "@/components/layout/payment/Pay";
import PaymentByProduct from "@/components/layout/payment/PaymentByProduct";
import SectionLayout from "@/components/layout/SectionLayout";
import CheckoutForm from "@/utils/CheckoutForm";
import SriptProvider from "@/utils/stripeProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const key =
  "pk_test_51NISv5CvtirLXdOoAJfNNhTLw1xHkqjyYa4znodKsBDc5RLMgFcbFJMOSbzDh25l5ABmjOlQw7jjvAyu5ZVIZ8pN00fBZ7yaid";
const stripePromise = loadStripe(key);
const PaymentCard = () => {
  return (
    <div>
      <SectionLayout>
        <div className="flex gap-2 bg-green-800 text-white">

        <Elements stripe={stripePromise}>
          <div className=" flex gap-2 ">
            <Pay></Pay>
          </div>
        </Elements>
            <div className="flex-grow">
              <PaymentByProduct></PaymentByProduct>
            </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PaymentCard;
