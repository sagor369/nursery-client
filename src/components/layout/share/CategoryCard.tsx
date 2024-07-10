import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Star, StarIcon } from "lucide-react";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { PiCurrencyDollarBold } from "react-icons/pi";

const CategoryCard = () => {
  const ratingRender = (rating: number) => {
    let ratings = [];
    for (let i = 1; i <= 5; i++) {
      ratings.push(
        i <= rating ? (
          <Star key={i} className="text-yellow-500" />
        ) : (
          <StarIcon key={i} className="text-gray-500" />
        )
      );
    }
    return ratings;
  };

  return (
    <div>
      <Card className=" p-2 bg-primary-gradian border-none">
        <CardHeader className="p-0">
        <div>
            <img className="h-44 w-full rounded-t-md" src="/src/assets/1.jpg" alt="" />
          </div>
        </CardHeader>
        <CardContent className="bg-white p-2">
          <h2 className="text-xl font-bold text-gray-800 pb-1 h-8 overflow-hidden ">hello alkfgj alskfg lksag laskhfg lashkg lakjsh ;l </h2>
          <div className="flex gap-2 pb-2">{ratingRender(4)}</div>
          <div className="bg-primary-gradian p-1 inline-block">
            <div className="flex items-center border-2 bg-white px-1">
              <PiCurrencyDollarBold className="size-5 text-red-600 font-bold" />
              <p className="text-2xl text-red-600 font-bold "> 350</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex p-2 justify-between rounded-b-lg bg-white border-t-2 py-2">
          <Button variant="outline" className="bg-white text-green-600 font-bold border border-green-800 hover:bg-green-800 hover:text-white ">
            Add to Card
          </Button>
          <div className="flex gap-4 items-center border rounded-md">
            <Button className="bg-white text-black hover:bg-green-800 ">
              <IoIosRemove className="hover:text-white  size-6 text-black" />
            </Button>
            <p>1</p>
            <Button className="bg-white text-black hover:bg-green-800 hover:text-white ">
              <IoMdAdd className="hover:text-white  size-6 text-black" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CategoryCard;
