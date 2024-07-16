import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetcategoryQuery } from "@/redux/features/categorySlice";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
type Tselect = {
  name: string;
  imageUrl: string;
  _id: string;
  description: string;
};
const SearchBar = () => {
  const {register, handleSubmit} =useForm()
  const navigate = useNavigate()
  const { data } = useGetcategoryQuery(undefined);
  const [category, setCategory] = useState("");

  const onSubmitHandler = (event: any) => {
    const{searchTerm} = event
    navigate(`/product?searchTerm=${searchTerm}${category && `&categoryId=${category}`}`)
  };

  const selectValue = (value: string) => {
    setCategory(value);
  };
  return (
    <div className=" flex items-center justify-center">
      <form
        onSubmit={handleSubmit( onSubmitHandler)}
        className="text-black max-w-2xl flex items-center justify-center rounded-md "
      >
        <Input
        {...register("searchTerm")}
          className="rounded-none rounded-l-md"
          type="text"
          placeholder="search"
        />
        <Select value={category} onValueChange={selectValue}>
          <SelectTrigger className="w-36 rounded-none ">
            <SelectValue placeholder="Categorys" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorys</SelectLabel>

              {data?.data?.map((item: Tselect) => (
                <SelectItem value={item._id}>{item.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="rounded-none rounded-r-md bg-green-300 hover:bg-green-600 hover:text-white"
          type="submit"
        >
          serach
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
