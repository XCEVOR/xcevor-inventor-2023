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
      name: "About",
      hash: "about",
    },
    {
      name: "Resume",
      hash: "resume",
    },    {
      name: "Portfolio",
      hash: "portfolio",
    },
  ] as const;

  const path = usePathname();
  console.log(path.slice(1));



  // const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-black dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 mt-3 sm:mt-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-[#ffbf00]",
                  {
                    "text-gray-950 dark:!text-[#ffbf00]":
                      ( (link.hash === "/" && path === "/") || link.hash === path.slice(1) ),
                  }
                )}
                href={link.hash}
                // onClick={() => {
                //   setActiveSection(link.name);
                //   setTimeOfLastClick(Date.now());
                // }}
              >
                {link.name}

                {( (link.hash === "/" && path === "/") || link.hash === path.slice(1) ) && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
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