import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const PaymentByProduct = () => {
  return (
    <div className="space-y-8 p-4 ">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between ">
          <div className="flex items-center" >
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">

            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-base  font-semibold "> $350</p>
          </div>
          </div>
          <div>
            quantity 5
          </div>
          <div className="font-medium">+$1,999.00</div>
        </div>
      ))}
    </div>
  );
};

export default PaymentByProduct;
