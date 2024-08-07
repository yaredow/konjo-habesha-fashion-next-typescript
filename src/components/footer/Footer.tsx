import NavLink from "../header/NavLink";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import NewsLetter from "./NewsLetter";
import paymentIcons from "@/assets/payment-icons.png";
import Image from "next/image";
import { QUICK_ACCESS_LINKS } from "@/utils/constants";

function Footer() {
  return (
    <footer className=" h-auto  border-t px-[10px] md:mt-8 md:px-12 md:py-4">
      <div className=" mt-8 flex flex-col items-center justify-center gap-6 border-b">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h1 className=" font-roboto text-xl font-semibold">
            Subscribe to our Newsletter
          </h1>

          <p className="text-sans text-sm">
            Stay updated with our latest products and promotions.
          </p>
        </div>
        <NewsLetter />
      </div>

      <div className=" mx-auto flex flex-col items-center justify-center gap-8 border-b py-6 pt-4">
        <div className=" hidden font-nav md:flex">
          <ul className="flex gap-[1.3rem]">
            {QUICK_ACCESS_LINKS.map((navLink, index) => (
              <li key={index}>
                <NavLink href={navLink.path}>{navLink.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-2">
          <div className=" h-12 w-12">
            <CiFacebook className=" text-3xl text-blue-500  hover:text-4xl " />
          </div>

          <div className=" h-12 w-12">
            <CiTwitter className=" text-3xl text-blue-500  hover:text-4xl " />
          </div>

          <div className=" h-12 w-12">
            <CiInstagram className=" text-3xl text-blue-500 hover:text-4xl " />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <Image
          src={paymentIcons}
          alt="secure payment methods icons"
          height={40}
          width={450}
        />
        <p className=" text-sm">Copyright © 2023. All rights are reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
