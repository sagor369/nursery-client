import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useGetcategoryQuery } from "@/redux/features/categorySlice";
import { Link } from "react-router-dom";
import { TPlantCategory } from "../plantManage/typex";
interface TCategory extends TPlantCategory {
  _id: string;
}
const NavbarManu = () => {
  const { data: result } = useGetcategoryQuery(undefined);
  const navData = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/product",
      title: "Products",
    },
    {
      link: "/product/photo",
      title: "Photos",
    },
    {
      link: "/manage",
      title: "Manage Product",
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <NavigationMenu>
        <NavigationMenuList>
          {navData.map((item) => {
            return (
              <NavigationMenuItem className="pl-4">
                <Link to={item.link}>
                  <NavigationMenuLink>{item.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover: bg-green-400 bg-inherit">
              Category
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-72 md:grid-cols-2 lg:w-96 bg-green-200">
                {result?.data?.map((category: TCategory) => (
                  <Link
                    to={`/product?&categoryId=${category._id}`}
                    className="hover:underline "
                    title="Introduction"
                  >
                    {category.name}
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator className="bg-inherit bg-green-800" />
      </NavigationMenu>
    </div>
  );
};

export default NavbarManu;
