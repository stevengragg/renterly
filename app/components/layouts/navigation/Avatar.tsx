import Image from "next/image";
import React from "react";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <Image
      className="rounded-full"
      alt="User Icon"
      src="/images/placeholder.jpg"
      height="32"
      width="32"
    />
  );
};

export default Avatar;
