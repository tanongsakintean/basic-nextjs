import Link from "next/link";
import React from "react";

type Props = {};

export function Nav(props: Props) {
  return (
    <nav className=" sticky top-0">
      <ul className="  list-none m-0 p-0 overflow-hidden bg-[#333]">
        <li className=" float-left hover:bg-[#111] py-[14px] px-[16px]">
          <Link href="/" className="text-white text-center  ">
            <p>Home</p>
          </Link>
        </li>
        <li className=" float-left hover:bg-[#111] py-[14px] px-[16px]">
          <Link href="/addUser" className=" text-white text-center ">
            <p>Add user</p>
          </Link>
        </li>
        <li className=" float-left hover:bg-[#111]  py-[14px] px-[16px]">
          <Link href="/contact" className="text-white text-center  ">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
