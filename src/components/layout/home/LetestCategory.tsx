import { Button } from "@/components/ui/button";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import SectionTitle from "../share/SectionTitle";
import { useGetPlantsQuery } from "@/redux/features/plantSlice";
import { toast } from "sonner";
import { TPlants } from "../plantManage/typex";
interface TPlant extends TPlants {
  _id: string;
}
const LetestCategory = () => {
  const {
    data: result,
    isError,
    isLoading,
  } = useGetPlantsQuery(undefined);
  if (isError) {
    toast.error(" plants fetching fail");
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  }
  return (
    <SectionLayout>
      <div className="bg-white rounded-md">
        <div className="bg-green-800 rounded-md mb-3 py-2 text-white">
          <SectionTitle title={"Latest Plants"}></SectionTitle>
        </div>
        <div className="bg-green-800 rounded-md p-4 grid grid-cols-4 gap-2">
          {result?.data?.slice(0, 8).map((item: TPlant) => (
            <CategoryCard key={item._id} item={item}></CategoryCard>
          ))}
        </div>

        {result?.data?.langth > 8 && (
          <div className="flex items-center justify-center py-4">
            <Button className="bg-green-500 text-gray-800 font-bold hover:bg-green-800 hover:text-white">
              See more
            </Button>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default LetestCategory;
