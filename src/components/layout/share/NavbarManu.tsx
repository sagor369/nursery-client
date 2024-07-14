import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import { Link } from "react-router-dom";

const NavbarManu = () => {
    return (
        <div className="flex items-center justify-center ">
            <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={"/"}>
                <NavigationMenuLink>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover: bg-green-400 bg-inherit">
                <Link to={'/product'}>Plants</Link> 
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-72 md:grid-cols-2 lg:w-96 bg-green-200">
                  <Link to="/docs" title="Introduction">
                    hello
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to={"/about"} className="px-4">
                <NavigationMenuLink>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to={"/blog"} className="px-4">
                <NavigationMenuLink>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to={"/manage"}>
                <NavigationMenuLink>Manage Product</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator className="bg-inherit bg-green-800" />
        </NavigationMenu>
        </div>
    );
};

export default NavbarManu;