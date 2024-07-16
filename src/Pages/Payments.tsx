import Pay from "@/components/layout/payment/Pay";
import PaymentByProduct from "@/components/layout/payment/PaymentByProduct";
import SectionLayout from "@/components/layout/SectionLayout";
import { usePaymentIntentMutation } from "@/redux/features/paymentSlice";
import { useAppSelector } from "@/redux/hooks";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const key =
  "pk_test_51NISv5CvtirLXdOoAJfNNhTLw1xHkqjyYa4znodKsBDc5RLMgFcbFJMOSbzDh25l5ABmjOlQw7jjvAyu5ZVIZ8pN00fBZ7yaid";
const stripePromise = loadStripe(key);
const PaymentCard = () => {
  const [data, {data:clintData, isError}] = usePaymentIntentMutation()
  const {plants} = useAppSelector((state)=> state.CardData)
  const totalcount = plants.reduce((acc, item) =>{
    acc.totalPic = acc.totalPic + item.totalQuantity
    acc.totaPrice = acc.totaPrice + item.totalAmount
    return acc
 }, {totaPrice: 0, totalPic:0})
 useEffect(()=>{
  data({amount: (totalcount.totaPrice).toFixed(2)})
 },[isError])
 console.log(clintData)
  return (
    <div>
      <SectionLayout>
        <div className="flex gap-2 bg-green-800 text-white">

        <Elements stripe={stripePromise}>
          <div className=" flex gap-2 ">
            <Pay totalcount={totalcount} plants={plants} clintData={clintData}></Pay>
          </div>
        </Elements>
            <div className="flex-grow">
              <PaymentByProduct plants={plants} totalcount={totalcount}></PaymentByProduct>
            </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PaymentCard;
