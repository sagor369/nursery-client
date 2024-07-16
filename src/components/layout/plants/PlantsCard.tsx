import { useGetPlantsQuery } from "@/redux/features/plantSlice";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import { TPlants } from "../plantManage/typex";
import { useLocation,} from "react-router-dom";
import { Button } from "@/components/ui/button";
import PaginationPage from "../share/Pagination";

interface TPlant extends TPlants {
  _id: string;
}

const PlantsCard = () => {
  const location = useLocation()
  const query =new URLSearchParams(location.search)
  const categoryId = query.get("categoryId")
  const searchTerm = query.get("searchTerm")
  const {data, isLoading} = useGetPlantsQuery({searchTerm, categoryId})
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  }
  if(data.data.length === 0){
    return (
      <div className="flex items-center justify-center">
        <p>No More Data</p>
      </div>
    );
  }
  return (
    <SectionLayout>
      <div className="bg-green-800 rounded-md p-4">
        <div className=" grid grid-cols-4 gap-2">
          {data?.data?.map((item: TPlant) => (
            <CategoryCard key={item._id} item = {item}></CategoryCard>
          ))}
        </div>
        {data?.data?.langth > 6 && (
          <div className="flex items-center justify-center py-4">
            <Button className="bg-green-500 text-gray-800 font-bold hover:bg-green-800 hover:text-white">
              See more
            </Button>
          </div>
        )}
        <PaginationPage></PaginationPage>
        
      </div>
    </SectionLayout>
  );
};

export default PlantsCard;
