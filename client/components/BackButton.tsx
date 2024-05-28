"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" ? (
        <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
      ) : (
        <button type="button" onClick={() => router.back()}>
          {/*  */}
          <Image src="/icons/arrow-left.svg" width={30} height={30} alt="menu icon" />
        </button>
      )}
    </>
  );
};

export default BackButton;
