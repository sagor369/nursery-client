import { Button } from "@/components/ui/button";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import SectionLayout from "../SectionLayout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { quantityAdd, quantitymainus, removeToCard } from "@/redux/features/CardSlice";

const CheckoutCard = () => {
  const {plants} = useAppSelector((state)=> state.CardData)
  const dispatch = useAppDispatch()
  const totalcount = plants.reduce((acc, item) =>{
     acc = acc + item.totalQuantity
     return acc
  }, 0)
  const totalAmount = plants.reduce((acc, item) =>{
     acc = acc + (item.totalQuantity* item.price)
     return acc
  }, 0)
  
  return (
    <SectionLayout>
      <div className="space-y-8 p-4 bg-green-800 text-white">
        <div className="text-center border-b  border-gray-400 py-2">
            <h2 className="text-xl text-white capitalize font-semibold ">Welcome to our Card page</h2>
        </div>
        <div> { plants.length ===0  ? <h2 className="text-xl font-semibold text-center text-opacity-40 text-white">Your Product is not added </h2>:
        <Table>
          <TableCaption>
          
            <Link to={"/payment"}>
              
              <Button className=" bg-white text-green-800 px-8 font-bold ">
               
                Checkout
              </Button>
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold text-white">
                Image
              </TableHead>
              <TableHead className="font-bold text-white">Name</TableHead>
              <TableHead className="font-bold text-white">Description</TableHead>
              <TableHead className="font-bold text-white">Price</TableHead>
              <TableHead className="font-bold text-center text-white w-56">
                Quantity
              </TableHead>
              <TableHead className="text-right font-bold text-white w-32">
                Amount
              </TableHead>
              <TableHead className="text-right font-bold text-white w-24">
                Remove
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plants.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">
                  <img src={item.imageUrl} alt="" className=" w-full h-16" />
                </TableCell>
                <TableCell>{item.name} </TableCell>
                <TableCell>{item.description} </TableCell>
                <TableCell>{item.price} </TableCell>
                <TableCell>
                  <div className="flex gap-4 items-center rounded-md justify-end">
                    <Button onClick={()=>dispatch(quantitymainus(item._id))} className="hover:bg-white hover:text-black  border text-white bg-transparent">
                      <IoIosRemove className="hover:bg-white  size-6 text-white hover:text-black" />
                    </Button>
                    <p className="text-black bg-white rounded-md py-3 px-5 font-bold">
                      {item.totalQuantity}
                    </p>
                    <Button onClick={()=>dispatch(quantityAdd(item._id))} className="hover:bg-white hover:text-black  border text-white bg-transparent">
                      <IoMdAdd className="hover:bg-white  size-6 text-white hover:text-black" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className=" text-right">
                 ${item.price * item.totalQuantity}
                </TableCell>
                <TableCell className=" text-right">
                  <div onClick={()=>dispatch(removeToCard(item._id))} className=" flex  justify-end">
                    <RxCross2 className=" size-6 hover:bg-white text-red-500 border " />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-green-900">
            <TableRow>
              <TableCell className="font-bold text-white" colSpan={4}>
                Total
              </TableCell>
              <TableCell className="text-center font-bold text-white text-xl">
                {" "}
                {totalcount} pic{" "}
              </TableCell>
              <TableCell
                colSpan={2}
                className="text-center font-bold text-white text-xl"
              >
                $ {totalAmount}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
         }</div>
      </div>
    </SectionLayout>
  );
};

export default CheckoutCard;
