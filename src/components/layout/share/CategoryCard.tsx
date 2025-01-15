import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { addToCard } from "@/redux/features/CardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ratingRender } from "@/utils/ratingsCard";
import { Link } from "react-router-dom";
import { TPlants } from "../plantManage/typex";
import { toast } from "sonner";

interface TPlant extends TPlants {
  _id: string;
}
const CategoryCard = ({ item }: { item: TPlant }) => {
  const dispatch = useAppDispatch();

  const cardAddProduct = () => {
    const total = {
      totalAmount: item.price,
      totalQuantity: 1,
    };
    dispatch(addToCard({ ...item, ...total }));
    toast.success("product add to card");
  };
  return (
    <div>
      <Card className=" p-2 bg-primary-gradian border-none">
        <CardHeader className="p-0">
          <Link to={`/product/plants/${item._id}`}>
            <div>
              <img
                className="h-44 w-full rounded-t-md"
                src={item.imageUrl}
                alt=""
              />
            </div>
          </Link>
        </CardHeader>
        <CardContent className="bg-white p-2">
          <h2 className="text-xl font-bold border-b-2 my-1 text-gray-800 pb-1 h-8 overflow-hidden ">
            {item.name}
          </h2>
          <div className="bg-primary-gradian p-1 inline-block">
            <div className=" border-2 bg-white px-1">
              <p className="font-bold">
                Price:
                <span className="text-xl text-red-600 font-bold ">
                  {" "}
                  ${item.price}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-1 py-1">
            <p>Rating: </p>
            <div className="flex items-center  gap-2 pb-2">
              {ratingRender(4)}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex p-2 justify-between rounded-b-lg bg-white border-t-2 py-2">
          <Button
            onClick={cardAddProduct}
            className="bg-green-500 text-stone-100 font-bold border border-green-800 hover:bg-green-800 hover:text-white "
          >
            Add to Card
          </Button>
          <div className="flex gap-4 items-center border rounded-md">
            <Button
              variant="outline"
              className="bg-white text-green-600 font-bold border border-green-800 hover:bg-green-800 hover:text-white "
            >
              <Link to={`/product/plants/${item._id}`}>Detaills</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CategoryCard;
