import { ratingRender } from "@/utils/ratingsCard";
import SectionLayout from "../SectionLayout";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCard,
} from "@/redux/features/CardSlice";
import { useGetSinglePlantQuery } from "@/redux/features/plantSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const PlantsDetails = () => {
  const [totalQuantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const cardData = useAppSelector((state) => state.CardData)
  console.log(cardData)
  const { id } = useParams();
  const { data: result, isLoading } = useGetSinglePlantQuery(id);
  
  const cardAddProduct = () =>{
    dispatch(addToCard({...result, totalQuantity}))
    toast.success("product add to card")
  }

  const handlepayment = () =>{
  dispatch(addToCard({...result.data, totalQuantity}))
  navigate("/payment")


  }
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  }
  return (
    <SectionLayout>
      <div>
        <div className="grid grid-cols-2 gap-4  bg-green-400 ">
          <div className="flex items-center justify-center p-4">
            <img
              className="h-[500px] rounded-md w-full "
              src={result.data.imageUrl}
              alt=""
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <div className="text-2xl font-bold font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2">
                <h2 className="col-span-1">Name: </h2>
                <h2 className="col-span-4">{result.data.name}</h2>
              </div>
              <div className=" font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2 items-start justify-between">
                <h2 className="text-base font-bold  col-span-1">
                  {" "}
                  description:{" "}
                </h2>
                <p className="col-span-4">{result.data.description}</p>
              </div>
              <div className="grid grid-cols-5 gap-1 ">
                <h2 className="text-base text-gray-700 font-bold col-span-1">
                  Ratings:{" "}
                </h2>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-2 pb-2 col-span-4">
                    {ratingRender(4)}
                  </div>
                  <p className="text-gray-600 ">4/5</p>
                </div>
              </div>
              <div className=" font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2">
                <h2 className="col-span-1 font-bold text-gray-700 text-base ">
                  Quantity:
                </h2>
                <p className="border-2 border-white px-2 font-semibold text-lg">
                  {result.data.quantity} pic
                </p>
              </div>
              <div className=" font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2">
                <h2 className="col-span-1 font-bold text-gray-700 text-base ">
                  Price:{" "}
                </h2>
                <div className="flex items-center border-2 bg-white px-1">
                  <PiCurrencyDollarBold className="size-5 text-red-600 font-bold" />
                  <p className="text-2xl text-red-600 font-bold ">
                    {" "}
                    {result.data.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex p-2 justify-between rounded-lg  border-2 py-2 bg-inherit border-white">
              <div className="flex gap-4 items-center rounded-md">
                <Button
                disabled ={ totalQuantity <= 1}
                  onClick={() => setQuantity(totalQuantity-1)}
                  className="bg-white text-black hover:bg-green-800 "
                >
                  <IoIosRemove className="hover:text-white  size-6 text-black" />
                </Button>
                <p> {totalQuantity}</p>
                <Button
                disabled ={ totalQuantity >= result.data.quantity}
                  onClick={() => setQuantity(totalQuantity + 1)}
                  className="bg-white text-black hover:bg-green-800 hover:text-white "
                >
                  <IoMdAdd className="hover:text-white  size-6 text-black" />
                </Button>
              </div>
              <div>
                <Button onClick={handlepayment} className="text-white mr-4 bg-green-600 font-bold border  hover:text-green-800 hover:bg-white ">
                  Buy Now
                </Button>
                <Button
                  onClick={cardAddProduct}
                  variant="outline"
                  className="bg-white text-green-600 font-bold border border-green-800 hover:bg-green-800 hover:text-white "
                >
                  Add to Card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PlantsDetails;
