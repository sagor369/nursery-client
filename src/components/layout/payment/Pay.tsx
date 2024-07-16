import { Button } from "@/components/ui/button";
import { FaMoneyBillWave } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { removeToCard, TPlants } from "@/redux/features/CardSlice";
import { usePaymentCreateMutation,  } from "@/redux/features/paymentSlice";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
interface TProps {
  totalcount: {
    totalPic: number;
    totaPrice: number;
  };
  plants: TPlants[];
  clintData:any
}
type TPayuser = {
  product: string
    quantity: number
    totalAmount: number
}

const Pay = ({ totalcount, plants, clintData }: TProps) => {
  const elements = useElements();
  const stripe = useStripe();
  const [checked, isChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentData, {data:result, isError:PaymentError, isLoading:PaymentLoading}] = usePaymentCreateMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedvalue = e.target.checked;
    isChecked(checkedvalue);
  };

  const payUser:TPayuser[] = [];
  for (let plant of plants) {
    payUser.push({
      product: plant._id,
      quantity: plant.quantity,
      totalAmount: plant.totalAmount,
    });
  }

console.log(clintData)
const userData = {
  products: [...payUser],
  quantitys: totalcount.totalPic,
  paymentId: clintData?.data?.client_secret,
  totalAmount:totalcount.totaPrice
}
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    if (!elements || !stripe) {
      return setErrorMessage("card form filupe");
    }

    
    
    // const cardElement = elements.getElement(CardElement);
    // console.log("element", elements)
    // console.log(cardElement)
   
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    //   billing_details: {
    //     name: (event.target as HTMLFormElement).FullName.value,
    //     email: (event.target as HTMLFormElement).email.value,
    //   },
    // });
    // console.log("PaymentIntent", paymentMethod, "confarm", error);

    // if (error) {
    //   setLoading(false);
    //   return;
    // }
    // const { paymentIntent, error: confirmError } =
    //   await stripe.confirmCardPayment(clintData.data.client_secret, {
    //     payment_method: paymentMethod.id,
    //   });
    // if (confirmError) {
    //   setLoading(false);
    //   return;
    // }
    
    await paymentData({...userData,   email : (event.target as HTMLFormElement).email.value,
    })
    if(PaymentLoading){
      return <div className="flex items-center justify-center"> loading....</div>
    }
   
    if(result){
      plants.map(item =>{
        dispatch(removeToCard(item._id))
      })
      toast.success(`payment success your id ${result.data._id}`)
      navigate("/")
    }
     if(PaymentError){
      toast.error("payment create faile")
    }

    setLoading(false);

    console.log(errorMessage);
  };

  return (
    <div>
      <Tabs defaultValue="card" className="w-[560px]">
        <TabsList className="grid w-full grid-cols-2 h-auto">
          <TabsTrigger value="card">
            <Label
              htmlFor="card"
              className="rounded-md border-2 w-full flex items-center justify-center flex-col p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 h-8 w-8"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Label>
          </TabsTrigger>
          <TabsTrigger value="cashOnDelivery">
            <Label
              htmlFor="cashOnDelivery"
              className="flex flex-col items-center justify-between rounded-md border-2 w-full"
            >
              <FaMoneyBillWave className="mb-3 size-6" />
              Cash On Delivery
            </Label>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="card" className="w-ful">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={onSubmitHandler}>
                <div className="grid gap-2">
                  <Label htmlFor="FullName">Name</Label>
                  <Input
                    name="FullName"
                    id="FullName"
                    placeholder="First Last"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" placeholder="" />
                </div>
                <div className="grid gap-2 my-2">
                  <Label htmlFor="number">Card number</Label>
                  <CardNumberElement id="card-number-element" className="border p-2 mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Expires</Label>
                    <CardExpiryElement className="border p-2 rounded-lg" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <CardCvcElement
                      id="cvc"
                      className="border p-2 rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-red-600 font-semibold "> {errorMessage}</p>
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full mt-4 bg-green-400 font-bold  text-gray-600 hover:bg-green-900 hover:text-white "
                >
                  Continue
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="cashOnDelivery"
          className="w-full  bg-white rounded-lg  p-4"
        >
          <div>
            <div>
              <label className="text-gray-600 pl-2">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                  className=" size-4 mr-2"
                />
                Confram cash on delivery
              </label>
            </div>

            <Button
              disabled={!checked}
              className="w-full bg-green-400 font-bold  text-gray-600 hover:bg-green-900 hover:text-white "
            >
              Continue
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pay;
