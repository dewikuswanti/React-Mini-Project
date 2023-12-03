import React from "react";
import { Button } from "@material-tailwind/react";
import Content from "../../components/Dashboard-Content";
import Navigation from "../../components/Navigation";
import Admin from "../../components/Admin";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const CustomButton = ({ text, time }) => {
  return (
    <Button className="bg-white hover:bg-white w-64 flex justify-between items-center shadow-none hover:shadow-none">
      <a className="p-2 bg-[#f9e4d1] flex rounded-lg">
        <PencilSquareIcon className="h-5 w-5 fill-[#FF993A]" />
      </a>
      <div className="text flex flex-col">
        <span className="text-[13px] font-medium text-left text-black first-letter:uppercase lowercase">
          {text}
        </span>
        <span className="text-[10px] font-light text-[#979CA5] mt-1">
          {time}
        </span>
      </div>
      <span className="text-lg text-[#979CA5] rotate-90">. . .</span>
    </Button>
  );
};

const Dashboard = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="Menu bottom-3 flex right-5 rounded-md md:rounded-3xl relative md:static md:right-[30rem] bg-white mt-8 shadow-xl p-9 md:h-[calc(96vh-2rem)] w-full md:w-[300rem] animate__animated animate__fadeInUp">
        <Content />
        <Admin />
      </div>
    </div>
  );
};

export default Dashboard;
