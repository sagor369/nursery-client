import { Button } from "@/components/ui/button";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { ChangeEvent,  useState } from "react";

const Pay = () => {
  const [checked, isChecked] = useState(false)
  const handleCheckboxChange = (e:ChangeEvent<HTMLInputElement>) => {
    const checkedvalue = e.target.checked;
    isChecked(checkedvalue)
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
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="First Last" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Card number</Label>
                <Input id="number" placeholder="" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="month">Expires</Label>
                  <Select>
                    <SelectTrigger id="month" aria-label="Month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">January</SelectItem>
                      <SelectItem value="2">February</SelectItem>
                      <SelectItem value="3">March</SelectItem>
                      <SelectItem value="4">April</SelectItem>
                      <SelectItem value="5">May</SelectItem>
                      <SelectItem value="6">June</SelectItem>
                      <SelectItem value="7">July</SelectItem>
                      <SelectItem value="8">August</SelectItem>
                      <SelectItem value="9">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year" aria-label="Year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem
                          key={i}
                          value={`${new Date().getFullYear() + i}`}
                        >
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-400 font-bold  text-gray-600 hover:bg-green-900 hover:text-white ">
                Continue
              </Button>
            </CardFooter>
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
            
            <Button disabled={!checked} className="w-full bg-green-400 font-bold  text-gray-600 hover:bg-green-900 hover:text-white ">
              Continue
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pay;
