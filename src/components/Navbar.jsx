// eslint-disable-next-line no-unused-vars
import React from "react";
// @ts-ignore
import logo from "../assets/image/nike-4-logo-svgrepo-com.svg";
import { navLinks } from "../links";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <header className="bg-[#E4DFDC]">
            <nav className="flex justify-between sm:justify-start gap-20 items-center py-1 px-6 max-w-screen-2xl xl:mx-auto">
                <div className="w-20">
                    <img src={logo} className="w-full" />
                </div>
                <ul className="hidden sm:flex gap-9 md:gap-20">
                    <li className="text-lg font-normal">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "cursor-pointer font-bold border-b-2 border-black"
                                    : "cursor-pointer"
                            }
                        >
                            New Releases
                        </NavLink>
                    </li>
                    {navLinks.map((link, idx) => (
                        <li key={idx} className="text-lg font-normal">
                            <a className="cursor-pointer">{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <IoMdMenu className="text-2xl font-bold" />
                        </SheetTrigger>
                        <SheetContent side={"top"} className="sm:hidden">
                            <SheetHeader></SheetHeader>
                            <ul className="flex justify-between mt-10">
                                <li className="text-lg font-normal">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "cursor-pointer font-bold border-b-2 border-black"
                                                : "cursor-pointer"
                                        }
                                    >
                                        New Releases
                                    </NavLink>
                                </li>
                                {navLinks.map((link, idx) => (
                                    <li
                                        key={idx}
                                        className="text-lg font-normal"
                                    >
                                        <a className="cursor-pointer">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
