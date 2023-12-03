import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import "animate.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const CustomSpan = ({ text }) => {
  return <span className="font-normal text-sm">{text}</span>;
};

const CustomSpan2 = ({ text }) => {
  return <span className="text-sm text-yellow-800">{text}</span>;
};

export default function Sidebar() {
  const [user, setUser] = useState([]);
  const [paging, setPaging] = useState({
    currentPage: 1,
    previousPage: 0,
    nextPage: 2,
  });

  const CustomButton = () => {
    return (
      <div>
        {user.map((user) => (
          <div key={user.id}>
            <Link to={`data-user/${user.id}`}>
              <Button className="font-normal bg-[#f2ebc6] text-black shadow-none hover:shadow-none mb-[3.1rem]">
                UI DESIGN
              </Button>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    getUser();
  }, [paging.currentPage]);

  const getUser = () => {
    axios
      .get(
        `https://reqres.in/api/users?name=&type=&per_page=6&page=${paging.currentPage}`
      )
      .then((res) => {
        setUser(res.data.data);
        setPaging({
          currentPage: res.data.page,
          previousPage: res.data.page - 1,
          nextPage: res.data.page + 1,
          totalPages: res.data.total_pages,
        });
      });
  };

  const handleBack = () => {
    setPaging({
      ...paging,
      currentPage: paging.currentPage - 1,
    });
  };

  const handleNext = () => {
    setPaging({
      ...paging,
      currentPage: paging.currentPage + 1,
    });
  };

  return (
    <div className="left-menu">
      <div className="title">
        <h1 className="md:static relative bottom-7 left-44 w-36 text-2xl md:text-4xl ">
          Dashboard
        </h1>
        <div className="flex justify-between mt-10 mb-5 mr-1">
          <div className="user-page text-xl mr-10">
            User Page {paging.currentPage}
          </div>
          <div className="pagination flex gap-5">
            <button
              className="Back text-yellow-800 flex disabled:text-black"
              onClick={handleBack}
              disabled={!paging.previousPage}>
              <ChevronLeftIcon className="h-4 w-5 mt-1" />
              Back
            </button>
            <button
              className="Next text-yellow-800 flex disabled:text-black"
              onClick={handleNext}
              disabled={paging.currentPage === paging.totalPages}>
              Next
              <ChevronRightIcon className="h-4 w-5 mt-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="member md:mt-7 flex">
        <div className="member-name flex-col">
          <p className="text-[#9CA3AF] hidden md:block font-normal text-xl">
            User name
          </p>
          <p className="text-[#9CA3AF] md:hidden block font-normal text-xl">
            Users
          </p>

          {user.map((user) => (
            <div key={user.id} className="member py-4 w-64">
              <Link to={`/data-user/${user.id}`}>
                <button className="flex items-center">
                  <div className="user-name">
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="avatar h-14 w-14 object-cover rounded-full border"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <p className="ml-5 font-normal text-sm">
                        {user.first_name}
                      </p>
                      <p className="ml-1 font-normal text-sm">
                        {user.last_name}
                      </p>
                    </div>
                    <p className="ml-5 font-normal text-xs text-[#9CA3AF]">
                      {user.email}
                    </p>
                  </div>
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="member-date hidden md:flex flex-col ml-7 items-center">
          <span className="text-[#9CA3AF] font-normal text-xl">Start</span>
          <div className="date-member gap-[4.3rem] pt-9 text-center flex flex-col ">
            <CustomSpan text="Feb 12" />
            <CustomSpan text="Feb 18" />
            <CustomSpan text="Feb 20" />
            <CustomSpan text="Mar 1" />
            <CustomSpan text="Mar 1" />
            <CustomSpan text="Mar 5" />
          </div>
        </div>
        <div className="member-rate hidden md:flex flex-col ml-12 items-center">
          <span className="text-[#9CA3AF] font-normal text-xl">Rate</span>
          <div className="date-member gap-[4.3rem] pt-9 text-center flex flex-col ">
            <CustomSpan2 text="4.8" />
            <CustomSpan2 text="4.5" />
            <CustomSpan2 text="4.8" />
            <CustomSpan2 text="5.0" />
            <CustomSpan2 text="4.4" />
            <CustomSpan2 text="5.0" />
          </div>
        </div>
        <div className="member-job ml-12 hidden md:flex flex-col items-center">
          <span className="text-[#9CA3AF] font-normal text-xl">Jobdesk</span>
          <div className="job-desk flex flex-col gap-[3rem] pt-6 text-cen">
            <CustomButton />
          </div>
        </div>
        <div className="member-region hidden md:flex flex-col ml-12 items-center">
          <span className="text-[#9CA3AF] font-normal text-xl">Region</span>
          <div className="date-member gap-[4.3rem] pt-9 text-center flex flex-col ">
            <CustomSpan text="Chicago" />
            <CustomSpan text="South Carolina" />
            <CustomSpan text="New York" />
            <CustomSpan text="Los Angeles" />
            <CustomSpan text="New Jersey" />
            <CustomSpan text="Zimbabwe" />
          </div>
        </div>
      </div>
    </div>
  );
}
