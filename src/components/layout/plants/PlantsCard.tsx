import { useGetPlantsQuery } from "@/redux/features/plantSlice";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import { TPlants } from "../plantManage/typex";

interface TPlant extends TPlants {
  _id: string;
}

const PlantsCard = () => {
  const {data, isLoading , isError} = useGetPlantsQuery(undefined)
  console.log(isError)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  }
  return (
    <SectionLayout>
      <div>
        <div className="bg-green-800 rounded-md p-4 grid grid-cols-4 gap-2">
          {data?.data?.map((item: TPlant) => (
            <CategoryCard key={item._id} item = {item}></CategoryCard>
          ))}
        </div>
        
      </div>
    </SectionLayout>
  );
};

export default PlantsCard;
