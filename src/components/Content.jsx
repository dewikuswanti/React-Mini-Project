import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const CustomSpan = ({ text }) => {
  return <span className="font-normal text-sm">{text}</span>;
};

const CustomSpan2 = ({ text }) => {
  return <span className="text-sm text-red-400">{text}</span>;
};

export default function Sidebar() {
  const [users, setUsers] = useState([]);
  const [paging, setPaging] = useState({
    currentPage: 1,
    previousPage: 0,
    nextPage: 2,
    totalPages: 0,
  });
  

  useEffect(() => {
    getUsers();
  }, [paging.currentPage]);

  const getUsers = () => {
    axios
      .get(
        `https://reqres.in/api/users?name=&type=&per_page=6&page=${paging.currentPage}`
      )
      .then((res) => {
        setUsers(res.data.data);
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

  const menuItems = [
    {
      id: 1,
      image: "https://source.unsplash.com/a-croissant-sandwich-on-a-table-next-to-a-small-bowl-of-cottage-cheese-nGf94oTHZV4",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  return (
    <div className="left-menu" style={{ width: "40%" }}>
      <div className="title">
      <h1 className="md:static relative bottom-7 left-44 w-36 text-2xl md:text-4xl ">
          Customers
        </h1>
      </div>
      <div className="member md:mt-2 flex">
        {users.map((user) => (
          <div key={user.id} className="member-card p-4 m-4 border rounded-lg">
            <img
              src={user.avatar}
              alt="Avatar"
              className="avatar h-14 w-14 object-cover rounded-full border"
            />
            <div className="mt-2">
              <p className="font-normal text-sm">{`${user.first_name} ${user.last_name}`}</p>
              <p className="font-normal text-xs text-[#9CA3AF]">{user.email}</p>
              <Link to={`data-user/${user.id}`}>
                <Button className="bg-red-400 text-black text-sm shadow-none hover:shadow-bg-red-800 mb-[4rem]">
                  See More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-5 mr-1">
        <div className="pagination flex gap-5">
          <button
            className="Back text-red-400 flex disabled:text-black"
            onClick={handleBack}
            disabled={!paging.previousPage}
          >
            <ChevronLeftIcon className="h-4 w-5 mt-1" />
            1
          </button>
          <button
            className="Next text-red-400 flex disabled:text-black"
            onClick={handleNext}
            disabled={paging.currentPage === paging.totalPages}
          >
            2
            <ChevronRightIcon className="h-4 w-5 mt-1" />
          </button>
        </div>
      </div>

      <div className="title">
        <h1 className="md:static relative bottom-7 left-44 w-36 text-2xl md:text-4xl ">
          Rekomendasi Menu
        </h1>
      </div>
      <div className="menu md:mt-2 flex">
        
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card p-4 m-4 w-100px h-100px border rounded-lg">
            <img
              src={item.image}
              alt={`Item ${item.id}`}
              className="menu-image h-14 w-14 object-cover rounded-full border"
            />
            <div className="mt-2">
              <p className="font-normal text-sm">{item.description}</p>
              <Link to={`menu-detail/${item.id}`}>
                <Button className="bg-red-400 text-black text-sm shadow-none hover:shadow-bg-red-800 mb-[4rem]">
                  See More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
