import { Button } from "@/components/ui/button";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { StripeCardNumberElement} from '@stripe/stripe-js';

const Pay = () => {
  const elements = useElements()
  const stripe = useStripe()
  const [checked, isChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedvalue = e.target.checked;
    isChecked(checkedvalue);
  };

  const onSubmitHandler =async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    if(!elements || !stripe){
      return setErrorMessage("card form filupe")
    }
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);
    
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement as StripeCardNumberElement,
    });
    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } else {
      console.log(paymentMethod);
      // Handle the successful creation of the payment method (send to server, etc.)
      setErrorMessage(null);
    }
    console.log(errorMessage)
  }
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
              <form  onSubmit={onSubmitHandler}>

              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input name= 'name' id="name" placeholder="First Last" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input name="city" id="city" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Card number</Label>
                <CardNumberElement id="number"  className="border rounded-lg p-3" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label >Expires</Label>
                  <CardExpiryElement className="border p-2 rounded-lg"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <CardCvcElement id="cvc" className="border p-2 rounded-lg" />
                </div>
              </div>
              <Button type="submit" className="w-full mt-4 bg-green-400 font-bold  text-gray-600 hover:bg-green-900 hover:text-white ">
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
