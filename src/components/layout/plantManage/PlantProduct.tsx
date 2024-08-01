import { FieldValues, SubmitHandler} from "react-hook-form";
import FormInput from "../share/FormInput";
import FormManage from "../share/FormManage";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useCreatePlantMutation } from "@/redux/features/plantSlice";
import { useGetcategoryQuery } from "@/redux/features/categorySlice";
import FormTitle from "../share/FormTitle";
import { Loader2 } from "lucide-react";
type Tselect = {
  name: string 
  imageUrl: string 
  _id: string 
  description: string
}
const PlantProduct = () => {
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] =useState("")
  const {data:result, } = useGetcategoryQuery(undefined)
  const [data, {isError, isLoading, isSuccess}] = useCreatePlantMutation()
  const selectValue = (value: string) => {
    setCategory(value);
  };

  const onsubmit: SubmitHandler<FieldValues> = async (event) => {
    const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
    const {imageUrl,price, quantity, ...propsData} = event
    console.log(event)
    const image = imageUrl[0];
    const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`;
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(url, { method: "POST", body: formData });
    const result = await res.json();
    if (!result.success) {
      return setErrorMessage(result.error);
    }
    await data({
      ...propsData,
      price: Number(price),
      quantity: Number(quantity),
      imageUrl: result.data.url,
      categoryId: category
    });
  };
  if(isSuccess){
    toast.success('Plants create is success', );
  }
  if(isError){
    toast.error('My Plants create fail');
  }
  console.log(errorMessage);
  return (
    <div className="border max-w-2xl mx-auto  p-4 rounded-md">
      <FormTitle title="Create a Plant Data"></FormTitle>
      <FormManage submitHandler={onsubmit}>
        <div>
          <label className="">
            Plant name
            <FormInput
              name="name"
              placeholder="enter your Plant name"
              type="text"
              value=""
            />
          </label>
        </div>
        <div>
          <label>
            Plant Description
            <FormInput
              name="description"
              placeholder="Plant description "
              type="text"
              value=""
            />
          </label>
        </div>
        <div className="grid grid-cols-2 items-center gap-2">
          <label>
            Plant Price
            <FormInput
              name="price"
              placeholder="Plant description "
              type="number"
              value=""
            />
          </label>
          <label>
            Plant Quantity
            <FormInput
              name="quantity"
              placeholder="quantity "
              type="number"
              value=""
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label htmlFor="">
            Plant Photo
            <FormInput
              name="imageUrl"
              placeholder="enter your photo"
              type="file"
              value=""
            />
          </label>
          <label htmlFor="">
            Category select
            <Select value={category} onValueChange={selectValue}>
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category Name</SelectLabel>
                  {result?.data?.map((item:Tselect) => <SelectItem value={item._id}> {item.name}</SelectItem>)
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
        </div>
        <div className=" flex items-center justify-center">
          {
            isLoading ? <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>: 
          <Button
            className="hover:bg-white hover:text-black bg-transparent border "
            type="submit"
          >
            Submit
          </Button>
          }
        </div>
      </FormManage>
    </div>
  );
};

export default PlantProduct;
