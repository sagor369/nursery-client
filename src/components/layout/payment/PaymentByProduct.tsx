import { TPlants } from "@/redux/features/CardSlice";
interface TProps {
  totalcount:{
    totalPic:number
    totaPrice: number
  }
  plants: TPlants[]
}
const PaymentByProduct = ({plants, totalcount}:TProps) => {
  
  return (
    <div className="space-y-8 p-4">
      <div >

      {plants.map((item) => (
        <div key={item._id} className="flex items-center justify-between mb-2">
          <div className="flex items-center" >
          <div>
            <img src={item.imageUrl} alt="" className=" w-36 h-16 rounded-md" />
          </div>
          <div className="ml-4 space-y-1">

            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-base  font-semibold "> ${item.price} </p>
          </div>
          </div>
          <div>
            {item.totalQuantity} pic
          </div>
          <div className="font-bold text-xl">${(item.totalAmount).toFixed(2)} </div>
        </div>
      ))}
      </div>
      <div className="flex gap-6 items-center justify-end mt-auto ">
        <p className="text-xl font-semibold">TotalQuantity: {totalcount.totalPic}</p>
        <p className="text-xl font-semibold">TotalAmount: ${(totalcount.totaPrice).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PaymentByProduct;
