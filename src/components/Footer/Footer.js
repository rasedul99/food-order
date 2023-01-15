import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";

import logo from "../../assets/images/res-logo.png";

const Footer = () => {
  return (
    <div className="bg-red-200 p-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div>
          <img src={logo} alt="logo" className="w-10" />
          <p>Hello Foods</p>
          <p className="font-['Istok_Web'] my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur accusamus
          </p>
        </div>

        <div>
          <h3 className="">Delivery Time</h3>
          <div className="font-['Istok_Web'] my-4">
            <h3>Sunday - Thursday</h3>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="font-['Istok_Web'] my-4">
            <h3 className="font-bold">Sunday - Thursday</h3>
            <p>off day</p>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="font-['Istok_Web'] my-4">
            <div className="">
              <p>Location: Danmonddi 32, Dhaka 1207, Bangladesh</p>
            </div>
            <div className="my-4">
              <p className="font-bold">Phone: 01700000000</p>
              <p className="font-bold">Email: example@gmail.com</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Newsletter</h3>
          <p className="font-['Istok_Web'] my-4">Subscribe our newsletter</p>
          <div className="border border-black px-1 py-2 rounded flex justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-0 outline-0 bg-transparent font-['Istok_Web']"
            />{" "}
            <button className="bg-red-600 px-7 py-2 rounded">
              <RiSendPlaneLine className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-5">
        <div>
          <p className="text-xs text-red-600">
            Copyright - 2023, website made by Rasedul Islam. All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <p>Follow:</p>
          <div className=" p-2 rounded-full bg-red-600">
            <AiOutlineFacebook className="text-white" />
          </div>
          <div className=" p-2 rounded-full bg-red-600">
            <AiOutlineGithub className="text-white" />
          </div>
          <div className=" p-2 rounded-full bg-red-600">
            <AiOutlineYoutube className="text-white" />
          </div>
          <div className=" p-2 rounded-full bg-red-600">
            <AiOutlineLinkedin className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
