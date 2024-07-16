import PlantSiteNav from "@/components/layout/plantManage/PlantSiteNav";
import SectionLayout from "@/components/layout/SectionLayout";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Category",
    href: "/manage/category",
  },
  {
    title: "Proudct",
    href: "/manage/product",
  },
];

const PlantManage = () => {
  return (
    <SectionLayout>
      <div className="hidden space-y-6 p-10 pb-16 md:block min-h-[90vh] bg-green-800 text-white">
        <div className="space-y-0.5 text-center">
          <h2 className="text-2xl font-bold tracking-tight capitalize">
            Product & Category Manage{" "}
          </h2>
          <p className="text-white capitalize">
            welcome to manage dashboard
          </p>
        </div>
        <Separator className="my-6 bg-white" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="-mx-4 lg:w-1/5">
            <aside>
              <PlantSiteNav items={sidebarNavItems} />
            </aside>
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PlantManage;
