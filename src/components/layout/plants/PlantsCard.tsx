import { Link } from "react-router-dom";
import SectionLayout from "../SectionLayout";
import CategoryCard from "../share/CategoryCard";

const PlantsCard = () => {
    return (
        <SectionLayout>
        <div>
          <div className="bg-green-800 rounded-md p-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <Link key={index} to={`/plants/${index}`}>
                {" "}
                <CategoryCard></CategoryCard>
              </Link>
            ))}
          </div>
        </div>
      </SectionLayout>
    );
};

export default PlantsCard;