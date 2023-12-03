import React from "react";
import Content from "../../components/Content";
import Navigation from "../../components/Nav";



const Dashboard = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="Menu bottom-3 flex rounded-md md:rounded-3xl relative md:static bg-[#FFA07A] mt-8 shadow-xl p-9 md:h-[calc(96vh-2rem)] w-full animate__animated animate__fadeInUp">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
