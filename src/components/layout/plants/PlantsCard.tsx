import { useGetPlantsQuery } from "@/redux/features/plantSlice";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import { TPlants } from "../plantManage/typex";
import { useLocation,} from "react-router-dom";
import PaginationPage from "../share/Pagination";

interface TPlant extends TPlants {
  _id: string;
}

const PlantsCard = () => {
  const location = useLocation()
  const query =new URLSearchParams(location.search)
  const categoryId = query.get("categoryId")
  const searchTerm = query.get("searchTerm")
  const page = query.get("page")
  const limit = 8
  const {data, isLoading} = useGetPlantsQuery({searchTerm, categoryId, page, limit})
  const {data:result} = useGetPlantsQuery({searchTerm})
  const totalPage = Math.ceil(result?.data?.length /limit)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  }
  if(data?.data?.length === 0){
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
        {totalPage > 1 && (
          <div className="flex items-center justify-center py-4">
            <PaginationPage page={page} totalPage={totalPage} ></PaginationPage>
          </div>
        )}
        
      </div>
    </SectionLayout>
  );
};

export default PlantsCard;
