import { useGetPlantsQuery } from "@/redux/features/plantSlice";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import { TPlants } from "../plantManage/typex";
import { useLocation } from "react-router-dom";
import PaginationPage from "../share/Pagination";

interface TPlant extends TPlants {
  _id: string;
}

const PlantsCard = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryId = query.get("categoryId");
  const searchTerm = query.get("searchTerm");
  const page = query.get("page")
  const limit = 8;
  let serarchField:
    | {
        title: string;
        value: string | number;
      }[]
    | undefined = [];
  categoryId && serarchField.push({ title: "categoryId", value: categoryId });
  searchTerm && serarchField.push({ title: "searchTerm", value: searchTerm });

  const { data, isLoading } = useGetPlantsQuery(serarchField);
  const totalPage = Math.ceil(data?.data?.length / limit);
  let pageData;
  if (!page || page <= '1') {
    pageData = data?.data?.slice(0, limit)
    
  } else{
    pageData = data?.data?.slice((Number(page) - 1) * limit);
  }
  console.log(pageData);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading.....</p>
      </div>
    );
  }
  if (data?.data?.length === 0 || !data?.data) {
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
          {pageData?.map((item: TPlant) => (
            <CategoryCard key={item._id} item={item}></CategoryCard>
          ))}
        </div>
        {totalPage > 1 && (
          <div className="flex items-center justify-center py-4">
            <PaginationPage page={Number(page)} totalPage={totalPage}></PaginationPage>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default PlantsCard;
