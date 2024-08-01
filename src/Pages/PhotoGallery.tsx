import { useGetPlantsQuery } from "@/redux/features/plantSlice";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const { data } = useGetPlantsQuery(undefined);
  console.log(data);

  return (
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 lg:gap-3 [&>img:not(:first-child)]:mt-8">
      {data?.data?.map(
        ({ imageUrl, _id }: { imageUrl: string; _id: string }) => {
          return (
            <Link to={`/product/plants/${_id}`}>
              <img className=" w-[340px] mt-3" src={imageUrl} alt="" />
            </Link>
          );
        }
      )}
    </div>
  );
};

export default PhotoGallery;
