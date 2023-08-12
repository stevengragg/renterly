"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-row cursor-pointer items-center gap-2">
      <Image
        className="rounded-full shadow-md"
        height="64"
        width="64"
        alt="Renterly App Logo"
        src="/images/Renterly_Logo.png"
        priority
      />
      <b className="hidden md:block font-bold text-lg">Renterly</b>
    </div>
  );
};

export default Logo;
