import { Link } from "react-router-dom";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const PlantsCard = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit = (e:any) =>{
   const formData = new FormData()
   formData.append("image", e.image)
   for (let pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]);
  }
  }
  return (
    <SectionLayout>
      <div>
        <div className="bg-green-800 rounded-md p-4 grid grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <CategoryCard key={index}></CategoryCard>
          ))}
        </div>
        <div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} type="text" />
            <input {...register("password")} type="password" />
            <input {...register("image")} type="file" />
            <Button> submit</Button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PlantsCard;
