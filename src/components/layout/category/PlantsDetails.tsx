import { ratingRender } from "@/utils/ratingsCard";
import SectionLayout from "../SectionLayout";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { useAppDispatch } from "@/redux/hooks";
import { quantityAdd, quantitymainus } from "@/redux/features/CardSlice";

const PlantsDetails = () => {
  const dispatch = useAppDispatch()
  return (
    <SectionLayout>
      <div>
        <div className="grid grid-cols-2 gap-4  bg-green-400 ">
          <div className="flex items-center justify-center p-4">
            <img
              className="h-[500px] rounded-md w-full "
              src="/src/assets/2.jpg"
              alt=""
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <div className="text-2xl font-bold font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2">
                <h2 className="col-span-1">Name: </h2>
                <h2 className="col-span-4">sun flower</h2>
              </div>
              <div className=" font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2 items-start justify-between">
                <h2 className="text-base font-bold  col-span-1">
                  {" "}
                  description:{" "}
                </h2>
                <p className="col-span-4">
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed
                </p>
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
                  35 pic
                </p>
              </div>
              <div className=" font-barlow text-gray-700 grid grid-cols-5 gap-1 capitalize mb-2">
                <h2 className="col-span-1 font-bold text-gray-700 text-base ">
                  Price:{" "}
                </h2>
                <div className="flex items-center border-2 bg-white px-1">
                  <PiCurrencyDollarBold className="size-5 text-red-600 font-bold" />
                  <p className="text-2xl text-red-600 font-bold "> 350</p>
                </div>
              </div>
            </div>

            <div className="flex p-2 justify-between rounded-lg  border-2 py-2 bg-inherit border-white">
              <div className="flex gap-4 items-center rounded-md">
                <Button onClick={()=> dispatch(quantitymainus(1))} className="bg-white text-black hover:bg-green-800 ">
                  <IoIosRemove className="hover:text-white  size-6 text-black" />
                </Button>
                <p>1</p>
                <Button onClick={()=> dispatch(quantityAdd(1))} className="bg-white text-black hover:bg-green-800 hover:text-white ">
                  <IoMdAdd className="hover:text-white  size-6 text-black" />
                </Button>
              </div>
              <div>
                <Button
                
                  className="text-white mr-4 bg-green-600 font-bold border  hover:text-green-800 hover:bg-white "
                >
                  Buy Now
                </Button>
                <Button
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
