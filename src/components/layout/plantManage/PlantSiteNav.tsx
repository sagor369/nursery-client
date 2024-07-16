import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
      href: string
      title: string
    }[]
  }
  

const PlantSiteNav = ({ className, items, ...props }: SidebarNavProps) => {
   const navigation = useNavigation()
    return (
        <nav
        className={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-full border-r min-h-[80vh]",
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              navigation.location?.pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-white hover:text-black",
              "justify-start"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
};

export default PlantSiteNav;