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

const CheckoutCard = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <SectionLayout>
      <div className="space-y-8 p-4 bg-green-800 text-white">
        <Table>
          <TableCaption>
            {" "}
            <Link to={"/payment"}>
              {" "}
              <Button className=" bg-white text-green-800 px-8 font-bold ">
                {" "}
                Checkout
              </Button>{" "}
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold text-white">
                Invoice
              </TableHead>
              <TableHead className="font-bold text-white">Status</TableHead>
              <TableHead className="font-bold text-white">Method</TableHead>
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
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>
                  <div className="flex gap-4 items-center rounded-md justify-end">
                    <Button className="hover:bg-white hover:text-black  border text-white bg-transparent">
                      <IoIosRemove className="hover:bg-white  size-6 text-white hover:text-black" />
                    </Button>
                    <p className="text-black bg-white rounded-md py-3 px-5 font-bold">
                      1
                    </p>
                    <Button className="hover:bg-white hover:text-black  border text-white bg-transparent">
                      <IoMdAdd className="hover:bg-white  size-6 text-white hover:text-black" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className=" text-right">
                  {invoice.totalAmount}
                </TableCell>
                <TableCell className=" text-right">
                  <div className=" flex  justify-end">
                    <RxCross2 className=" size-6 hover:bg-white text-red-500 border " />
                  </div>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-green-900">
            <TableRow>
              <TableCell className="font-bold text-white" colSpan={3}>
                Total
              </TableCell>
              <TableCell className="text-center font-bold text-white text-xl">
                {" "}
                12 pic{" "}
              </TableCell>
              <TableCell
                colSpan={2}
                className="text-center font-bold text-white text-xl"
              >
                $2,500.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </SectionLayout>
  );
};

export default CheckoutCard;
