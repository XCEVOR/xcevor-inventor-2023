"use client";

import React from "react";
import { motion } from "framer-motion";
// import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function FixedNavbar() {

  const links = [
    {
      name: "Home",
      hash: "/",
    },
    {
      name: "Three",
      hash: "/three",
    },
    {
      name: "About",
      hash: "/about",
    },
    {
      name: "Resume",
      hash: "/resume",
    },
    {
      name: "Projects",
      hash: "/projects",
    },
    {
      name: "Contact",
      hash: "/contact",
    },   
    // {
    //   name: "Portfolio",
    //   hash: "/portfolio",
    // },
  ] as const;

  const path = usePathname();
  // console.log("  @@ console.log(path.split(/)[1]); ", path.split("/")[1]);



  // const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        // className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#F8EFE4] border-opacity-40 bg-[#F8EFE4] bg-opacity-80 shadow-[4px_4px_4px_4px_rgba(0,0,0,0.3)] shadow-[#F8EFE4]/[0.1] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-[#0A0A0A] dark:border-[#0A0A0A]/40 dark:bg-opacity-75"
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#F8EFE4] border-opacity-40 bg-[#F8EFE4] bg-opacity-80  backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.85rem] sm:w-[36rem] sm:rounded-full dark:bg-[#0D0B0D] dark:border-[#040404]/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 mt-3 sm:mt-0">
        <ul className="flex w-[28rem] flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                // className={clsx(
                //   "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                //   {
                //     "text-gray-950 dark:text-gray-200":
                //       activeSection === link.name,
                //   }
                // )}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-4 x-10 text-[1.1rem] font-bold hover:text-gray-950 transition dark:text-[#F7F3ED] dark:hover:text-[#edf048]",
                  {
                    "text-gray-950 dark:!text-[#282120]":
                      ( (link.hash === "/" && path === "/") || link.hash === "/" + path.split("/")[1] ),
                  }
                )}
                href={link.hash}
                // onClick={() => {
                //   setActiveSection(link.name);
                //   setTimeOfLastClick(Date.now());
                // }}
              >
                {link.name}

                {( (link.hash === "/" && path === "/") || link.hash === "/" + path.split("/")[1] ) && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-[#edf048] "
                    // className="absolute inset-0 -x-10 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full dark:border-[#FAD02C] dark:text-purple-400 dark:hover:text-white dark:hover:bg-[#FAD02C]/[50%] dark:focus:ring-purple-900 transition duration-300 ease-in-out"
                    // layoutId="activeSection"
                    // transition={{
                    //   type: "spring",
                    //   stiffness: 380,
                    //   damping: 30,
                    // }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}