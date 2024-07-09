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
  } from "@/components/ui/select"
const SearchBar = () => {
  return (
    <div className=" flex items-center justify-center">

    <div className="text-black max-w-2xl flex items-center justify-center rounded-md ">
      <Input className="rounded-none rounded-l-md" type="text" placeholder="search" />
      <Select>
        <SelectTrigger className="w-36 rounded-none ">
          <SelectValue placeholder="Categorys" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categorys</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant="outline" className="rounded-none rounded-r-md bg-green-300 hover:bg-green-600 hover:text-white" type="submit">serach</Button>
    </div>
    </div>
  );
};

export default SearchBar;
