"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import work from "@/public/nav/work.webp";
import movie from "@/public/nav/movie.webp";
import faqs from "@/public/nav/faqs.webp";
import uses from "@/public/nav/uses.webp";
import NavDrawer from "./nav-drawer";

export function NavMenu() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      // remove event listener when the component is unmounted to not cause any memory leaks
      // otherwise the event listener will continue to be active
      window.removeEventListener("resize", handleResize);
    };
    // add `isMobile` state variable as a dependency so that
    // it is called every time the window is resized
  }, [isMobile]);

  return isMobile ? (
    <NavDrawer />
  ) : (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem className="p-0">
          <NavigationMenuTrigger className="font-normal text-base p-0 -mt-3 rounded-full px-3 py-1 bg-transparent hover:bg-black/30 h-auto">
            more
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="text-white grid w-[150px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[350px]">
              <ListItem
                title="work"
                href="/work"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                  src={work}
                  alt="work"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="movies"
                href="/movies"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                  src={movie}
                  alt="anime"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="uses"
                href="/uses"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                  src={uses}
                  alt="uses"
                  placeholder="blur"
                />
              </ListItem>

              <ListItem
                title="faqs"
                href="/faqs"
                className="relative z-10 hover:text-white hover:opacity-80"
              >
                <Image
                  className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                  src={faqs}
                  alt="faqs"
                  placeholder="blur"
                />
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
