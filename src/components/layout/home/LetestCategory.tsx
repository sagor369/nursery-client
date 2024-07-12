import { Button } from "@/components/ui/button";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";
import SectionTitle from "../share/SectionTitle";
import { Link } from "react-router-dom";

const LetestCategory = () => {
  return (
    <SectionLayout>
      <div className="bg-white rounded-md">
        <div className="bg-green-800 rounded-md mb-3 py-2 text-white">
            <SectionTitle title = {"Latest Plants"}></SectionTitle>
        </div>
        <div className="bg-green-800 rounded-md p-4 grid grid-cols-4 gap-2" >
            {
                Array.from({ length: 8 }).map((_, index) => <Link key={index} to={`/plants/${index}`}> <CategoryCard ></CategoryCard>
                </Link> )
            }
       
        </div>
        <div className="flex items-center justify-center py-4">
            <Button className="bg-green-500 text-gray-800 font-bold hover:bg-green-800 hover:text-white">See more</Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default LetestCategory;
