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
        <div className="flex items-center justify-center border-t-2 mt-4 py-2">
            <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={"/home"}>
                <NavigationMenuLink>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover: bg-green-400 bg-inherit">
                Plants
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
              <Link to={"/blog"}>
                <NavigationMenuLink>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator className="bg-inherit bg-green-800" />
        </NavigationMenu>
        </div>
    );
};

export default NavbarManu;