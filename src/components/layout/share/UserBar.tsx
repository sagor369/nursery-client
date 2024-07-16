import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserBar = () => {
  const {plants} = useAppSelector((state) => state.CardData)
  return (
    <div className="flex items-center gap-2 ">
      <Button className="bg-white text-green-800 hover:bg-slate-300">
      <Link to={"/checkout"} className="flex ">
       <sup className="text-red-500 text-base font-bold">{plants.length} </sup>
        <FaShoppingCart className="size-6 " />
      </Link>
      </Button>
    </div>
  );
};

export default UserBar;
