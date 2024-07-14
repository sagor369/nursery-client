import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/hooks";
const PaymentByProduct = () => {
  const {plants} = useAppSelector((state)=> state.CardData)
  console.log(plants)
  return (
    <div className="space-y-8 p-4 ">
      {plants.map((item, index) => (
        <div key={item._id} className="flex items-center justify-between ">
          <div className="flex items-center" >
          <div>
            <img src={item.imageUrl} alt="" className=" w-36 h-16" />
          </div>
          <div className="ml-4 space-y-1">

            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-base  font-semibold "> ${item.price} </p>
          </div>
          </div>
          <div>
            {item.totalQuantity} pic
          </div>
          <div className="font-bold text-xl">+${item.totalQuantity* item.price} </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentByProduct;
