import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex justify-between container mx-auto">
      <h3 className="text-center my-8 font-bold">React Clok</h3>
      <Link href="https://github.com/nhanluongoe/react-clok">
        <AiFillGithub className="text-4xl text-center my-8" />
      </Link>
    </header>
  );
}
