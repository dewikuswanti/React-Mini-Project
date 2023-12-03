import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/Nav";
import { Button } from "@material-tailwind/react";

export default function DataUser() {
  const [user, setUser] = useState({});
  const { id } = useParams(); // Destructure id directly from useParams
  console.log(id);

  useEffect(() => {
    getUser();
  }, [id]); // Include id as a dependency for useEffect

  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const menuItems = [
    {
      id: 1,
      image: "https://source.unsplash.com/a-croissant-sandwich-on-a-table-next-to-a-small-bowl-of-cottage-cheese-nGf94oTHZV4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo nam",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo nam",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo nam",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo nam",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo nam",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/a-cup-of-coffee-sitting-on-top-of-a-green-chair-GNruec0ES7g",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo nam",
    },
  ];

  return (
    <div className="flex">
      <Navigation />
      <div className="Menu bottom-3 right-5 rounded-md md:rounded-3xl relative md:static md:right-[30rem] bg-[#FFA07A] mt-8 shadow-xl p-9 md:h-[calc(96vh-2rem)] w-full md:w-[300rem] animate__animated animate__fadeInUp">
        <div className="title flex gap-3 h-20 items-center">
          <img src={user.avatar} alt="" className="w-20 h-20 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-2xl">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-base text-[#9CA3AF]">{user.email}</p>
          </div>
        </div>
        
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card p-4 m-4 max-w-xs border rounded-sm">
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
}
