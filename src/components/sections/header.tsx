"use client";
import { Card } from "../ui/card";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon } from "../ui/icons";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarSmall from "@/assets/images/avatar-small.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const pathName = `/${pathname.split("/")[1]}`;
  const navConfig = [
    { title: "Find Jobs", href: "/" },
    { title: "Top Companies", href: "/top-companies" },
    { title: "Job Tracker", href: "/job-tracker" },
    { title: "My Calendar", href: "/my-calender" },
    { title: "Documents", href: "/documents" },
    { title: "Messages", href: "/messages" },
    { title: "Notifications", href: "/notification" },
  ];

  return (
    <Card className=" rounded-none py-4 border-none">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex xl:gap-10 gap-2 ">
            <Link to="/">
              <img src="logo.svg" alt="Logo" width="40" height="38" />
            </Link>
            <div className="lg:flex hidden items-center xl:gap-6 gap-3">
              {navConfig.map((navItem, index) => (
                <Link
                  key={index + 1}
                  className={`${
                    pathName === navItem.href
                      ? "font-semibold text-active"
                      : "font-normal text-primary"
                  } xl:text-base text-sm`}
                  to={navItem.href}
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center xl:gap-3.75 gap-2">
            <div className="relative sm:block hidden">
              <div className="absolute top-0 left-5 translate-y-1/2 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                className=" bg-input 2xl:w-[261px] xl:w-[220px] w-[180px] h-9.75 border-0 outline-0 pl-12 rounded-xl overflow-hidden"
                placeholder="Search"
                type="text"
                name=""
                id=""
              />
            </div>
            <Button className="sm:flex hidden font-normal text-white xl:text-base text-sm xl:px-5 px-3.5 py-2.5">
              Resume Builder
            </Button>
            <Menubar className="p-0 h-auto rounded-full border-0">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer p-0">
                  <Avatar className="min-w-9.5 min-h-9.5">
                    <AvatarImage src={avatarSmall} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem className="cursor-pointer">Profile</MenubarItem>
                  <MenubarItem className="cursor-pointer">Logout</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <Sheet>
              <SheetTrigger className="lg:hidden block">
                <AlignLeft />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="hidden"></SheetTitle>
                  <SheetDescription className="hidden"></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col px-5 gap-3">
                  {navConfig.map((navItem, index) => (
                    <Link
                      key={index + 1}
                      className={`${
                        pathName === navItem.href
                          ? "font-semibold text-active"
                          : "font-normal text-primary"
                      } text-base border-b pb-3`}
                      to={navItem.href}
                    >
                      {navItem.title}
                    </Link>
                  ))}
                  <div className="relative block sm:hidden">
                    <div className="absolute top-0 left-2 translate-y-1/2 pointer-events-none">
                      <SearchIcon />
                    </div>
                    <input
                      className=" bg-input w-full h-9.75 border-0 outline-0 pl-8 rounded-xl overflow-hidden"
                      placeholder="Search"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <Button className="flex sm:hidden font-normal text-white xl:text-base text-sm xl:px-5 px-3.5 py-2.5">
                    Resume Builder
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
