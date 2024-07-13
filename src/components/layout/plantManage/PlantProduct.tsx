import { SubmitHandler } from "react-hook-form";
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
import { useCreatePlantMutation, useGetPlantsQuery } from "@/redux/features/plantSlice";
import { useGetcategoryQuery } from "@/redux/features/categorySlice";
type Tselect = {
  name: string 
  imageUrl: string 
  _id: string 
  description: string
}
const PlantProduct = () => {
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] =useState("")
  const {data:result, isLoading:loading, isError:error} = useGetcategoryQuery(undefined)
  const [data, {isError, isLoading, isSuccess}] = useCreatePlantMutation()
  console.log(result)
  const selectValue = (value: string) => {
    setCategory(value);
  };

  const onsubmit: SubmitHandler<any> = async (event) => {
    const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
    const {imageUrl, ...propsData} = event
    const image = imageUrl[0];
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${ApiKey}`;
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(url, { method: "POST", body: formData });
    const result = await res.json();
    if (!result.success) {
      return setErrorMessage(result.error);
    }
    data({
      ...propsData,
      imageUrl: result.data.url,
      category
    });
  };
  if(isSuccess){
    toast.success('Plants create is success', );
  }
  if(isError){
    toast.error('My Plants create fail');
  }
  if(isLoading){
   return <div className="flex items-center justify-center">
      <p>Loading.....</p>
    </div>
  }
  return (
    <div className="border max-w-2xl mx-auto  p-4 rounded-md">
      <FormManage submitHandler={onsubmit}>
        <div>
          <label className="">
            Category name
            <FormInput
              name="name"
              placeholder="enter your category name"
              type="text"
              value=""
            />
          </label>
        </div>
        <div>
          <label>
            Category Description
            <FormInput
              name="description"
              placeholder="category description "
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
              placeholder="category description "
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
            Category Photo
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
          <Button
            className="hover:bg-white hover:text-black bg-transparent border "
            type="submit"
          >
            Submit
          </Button>
        </div>
      </FormManage>
    </div>
  );
};

export default PlantProduct;
