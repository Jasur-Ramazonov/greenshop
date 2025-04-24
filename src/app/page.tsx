import Image from "next/image";
import "./styles/main.css";
import { inter } from "./ui/fonts";
import Plant from "@/app/photos/01 1.png";
import Link from "next/link";
import Products from "./Products";
import Location from "@/app/photos/Location.png";
import Message from "@/app/photos/Message.png";
import Calling from "@/app/photos/Calling.png";
import Facebook from "@/app/photos/Facebook.png";
import Instagram from "@/app/photos/Instagram.png";
import Twitter from "@/app/photos/Twitter.png";
import Union from "@/app/photos/Union.png";
import Linkedin from "@/app/photos/Linkedin.png";
import Image16 from "@/app/photos/image 16.png";
import Logo from "./photos/Logo.png";

import Categories from "./Categories";
import Cart from "./Cart";

export default async function Home() {
  return (
    <div
      className={`flex flex-col gap-[46px] sm:pb-0 pb-[120px] ${inter.className}`}
    >
      <Cart />
      {/* main Photo */}
      <div className="md:px-[120px] px-[20px] mt-[4px] relative">
        <div className="bg-[#F5F5F580] w-full h-[450px] flex">
          <div className="lg:w-[55%] md:w-[80%] w-full h-1/2 p-[40px] flex flex-col gap-2">
            <p
              className={`text-[14px] ${inter.className} uppercase text-[#3D3D3D]`}
            >
              Welcome to GreenShop
            </p>
            <p
              className={`${inter.className} text-[#3D3D3D] font-[900] 2xl:text-[70px] uppercase 2xl:leading-[70px] text-[40px] leading-[50px] tracking-normal `}
            >
              Let’s Make a Better <span className="text-[#46a358]">Planet</span>
            </p>
            <p className={`text-[#727272]`}>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
          </div>
          <div className="absolute -top-10 right-20 lg:block hidden">
            <Image src={Plant} alt="Plant" />
          </div>
          <div className="absolute right-100 bottom-2 lg:block hidden">
            <Image src={Plant} alt="Plant" width={135} />
          </div>
        </div>
        <Link
          href={"/shop"}
          className="px-[26px] py-[9px] rounded-md bg-[#46A358] absolute text-white md:bottom-15 bottom-5 md:left-41 left-15 cursor-pointer ease-linear duration-150 hover:bg-[#4d8e5a]"
        >
          SHOP NOW
        </Link>
      </div>
      {/* second page */}
      <div className="md:px-[120px] px-[20px] w-full">
        <div className="w-full flex lg:flex-row flex-col gap-14">
          {/* categories */}
          <div className="bg-[#FBFBFB] lg:w-1/3 w-full p-[14px] h-[500px]">
            <div>
              <h1 className={`${inter.className} font-bold text-[18px]`}>
                Categories
              </h1>
              <Categories />
            </div>
          </div>
          {/* Products */}
          <Products />
        </div>
      </div>
      {/* Footer */}
      <div className="md:px-[120px] px-[20px] mb-[100px]">
        {/* First section */}
        <div className="bg-[#edf6ef] xl:h-[88px] h-fit w-full flex xl:flex-row flex-col items-center md:gap-15 gap-5 p-[23px]">
          <div className="flex md:flex-row flex-col md:gap-15 gap-5">
            <Image src={Logo} alt="logo" />
            <div className="flex gap-2 items-center">
              <Image src={Location} alt="location icon" />
              <p className="text-sm text-[#3D3D3D] w-[176px]">
                70 West Buckingham Ave. Farmingdale, NY 11735
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-15 gap-5">
            <div className="flex gap-2 items-center">
              <Image src={Message} alt="Message Icon" />
              <p className="text-sm text-[#3d3d3d]">contact@greenshop.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Calling} alt="Calling Icon" />
              <p className="text-sm text-[#3d3d3d]">+88 01911 717 490</p>
            </div>
          </div>
        </div>
        {/* Second section */}
        <div className="bg-[#fbfbfb] xl:h-[236px] h-fit w-full flex xl:flex-row flex-col items-center xl:gap-30 lg:gap-15 gap-5 p-[23px]">
          <div className="flex sm:flex-row flex-col sm:gap-30 gap-5 sm:mr-0 mr-[80px]">
            <div>
              <p className="font-bold text-base text-[#3d3d3d]">My Account</p>
              <p className="text-sm text-[#3d3d3d] w-[81px] leading-8">
                My Account Our stores Contact us Career Specials
              </p>
            </div>
            <div>
              <p className="font-bold text-base text-[#3d3d3d]">Help & Guide</p>
              <p className="text-sm text-[#3d3d3d] w-[137px] leading-8">
                Help Center How to Buy Shipping & Delivery Product Policy How to
                Return
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col md:gap-44 sm:gap-30 gap-5">
            <div>
              <p className="font-bold text-base text-[#3d3d3d]">Categories</p>
              <p className="text-sm text-[#3d3d3d] w-[93px] leading-8">
                House Plants Potter Plants Seeds Small Plants Accessories
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-base text-[#3d3d3d]">Social Media</p>
              <div className="flex gap-2">
                <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                  <Image src={Facebook} alt="Facebook icon" />
                </div>
                <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                  <Image src={Instagram} alt="Facebook icon" />
                </div>
                <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                  <Image src={Twitter} alt="Facebook icon" />
                </div>
                <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                  <Image src={Linkedin} alt="Facebook icon" />
                </div>
                <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                  <Image src={Union} alt="Facebook icon" />
                </div>
              </div>
              <p className="font-bold text-base text-[#3d3d3d]">We Accept</p>
              <div>
                <Image src={Image16} alt="Image16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
