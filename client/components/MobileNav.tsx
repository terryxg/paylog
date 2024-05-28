"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const MobileNav = ({ user }: { user: object }) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="menu" height={30} width={30} />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="flex cursor-pointer items-center gap-1">
            <Image src="/icons/logo.svg" alt="IBank logo" width={34} height={34} />
            <h1 className="sidebar-logo text-26 font-ibm-plex-serif font-bold text-black-2">
              IBank
            </h1>
          </Link>
          <div className="mobilenav-sheet ">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                        key={item.label}
                        href={item.route}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({ "brightness-[3] invert-0": isActive })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
