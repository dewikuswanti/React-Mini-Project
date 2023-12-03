import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/Navigation";

export default function DataUser() {
  const [user, setUser] = useState({});

  const param = useParams();
  console.log(param);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <Navigation />
      <div className="Menu bottom-3 right-5 rounded-md md:rounded-3xl relative md:static md:right-[30rem] bg-white mt-8 shadow-xl p-9 md:h-[calc(96vh-2rem)] w-full md:w-[300rem] animate__animated animate__fadeInUp">
        <div className="title flex gap-3 h-20 items-center">
          <img src={user.avatar} alt="" className="w-20 h-20 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-2xl">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-base text-[#9CA3AF]">{user.email}</p>
          </div>
        </div>
        <div className="detail gap-20 grid md:grid-rows-2 md:grid-flow-col mt-16">
          <div className="summary">
            <h1 className="text-2xl">Summary</h1>
            <p className="text-justify mt-3 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nihil nisi asperiores neque ducimus fugiat magnam
              animi, ab harum nulla, aliquid nostrum cum atque quod libero aut
              nam, unde dolorem? Omnis cum placeat harum molestiae atque, dolor
              neque, explicabo ullam, molestias velit nesciunt excepturi
              perferendis.
            </p>
          </div>
          <div className="detail">
            <h1 className="text-2xl">Detail</h1>
            <p className=" text-justify mt-3 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam,
              repellendus quibusdam tempore eligendi ipsam, non unde similique
              maxime deleniti ipsa fugit quam voluptate optio laudantium, iure
              sit neque explicabo?
            </p>
          </div>
          <div className="tech">
            <h1 className="text-2xl">Tech</h1>
            <p className=" text-justify mt-3 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consequuntur fugit at laboriosam officia eveniet veniam minima delectus quae mollitia ipsa alias quis voluptatem enim dolor itaque iste eaque dignissimos veritatis doloribus quisquam corrupti reprehenderit corporis eius! Sapiente, sed placeat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
