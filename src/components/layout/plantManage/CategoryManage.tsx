import { SubmitHandler } from "react-hook-form";
import FormInput from "../share/FormInput";
import FormManage from "../share/FormManage";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateCategoryMutation } from "@/redux/features/categorySlice";
import { toast } from "sonner";
import FormTitle from "../share/FormTitle";
import { Loader2 } from "lucide-react";

const CategoryManage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, { isError, isLoading, isSuccess }] = useCreateCategoryMutation();
  const onsubmit: SubmitHandler<any> = async (event) => {
    setErrorMessage("");

    const ApiKey = "35ad74456a84c96fea6c9d9aedd15a97";
    const image = event.imageUrl[0];
    const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`;
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(url, { method: "POST", body: formData });
    const result = await res.json();
    if (!result.success) {
      return setErrorMessage(result.error);
    }
    data({
      name: event.name,
      description: event.description,
      imageUrl: result.data.url,
    });
  };
  if (isSuccess) {
    toast.success("Category create is success");
  }
  if (isError) {
    toast.error("My cagetory create fail");
  }
  
  console.log(errorMessage);

  return (
    <div className="border max-w-2xl mx-auto  p-4 rounded-md">
      <FormTitle title="Create a Category Data"></FormTitle>
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
        <div>
          <label htmlFor="">
            Category Photo
            <FormInput
              name="imageUrl"
              placeholder="enter your photo"
              type="file"
              value=""
            />
          </label>
        </div>
        <div className="flex items-center justify-center">
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

export default CategoryManage;
