import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
const UserBar = () => {
  return (
    <div className="flex items-center gap-2 ">
      <Button className="bg-inherit border hover:bg-green-900">Login</Button>
      <Button className="bg-white text-green-800 hover:bg-slate-300">
       <sup className="text-red-500 text-base font-bold">1</sup>
        <FaShoppingCart className="size-6 " />
      </Button>
    </div>
  );
};

export default UserBar;
