import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import {
  Card,
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import {
  FolderIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  Bars3Icon,
  LightBulbIcon,
  MapIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    Navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className={`navigation ${darkMode ? 'dark-mode' : ''}`}>
      {isMobile ? (
        //Mobile
        <div className="md:hidden">
          <React.Fragment>
          <Button
            className="relative z-10 left-7 top-4 p-3 bg-transparent rounded-none text-xl text-black border-none shadow-none hover:shadow-none animate__animated animate__fadeInUp"
            onClick={openDrawer}
          >
            <Bars3Icon className="h-5 w-5 bg-transparent" />
          </Button>
          <Drawer open={open} onClose={closeDrawer}>
              <div className="mb-2 flex items-center justify-between p-4">
                <img
                  src="../../public/assets/admin.png"
                  alt=""
                  className="h-10 mt-2"
                />

                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </IconButton>
              </div>
              <List className="gap-5 ml-3 h-[200vh]">
                <Link to={"/"}>
                  <ListItem className="hover:bg-white">
                    <ListItemPrefix>
                      <Squares2X2Icon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                  </ListItem>
                </Link>
                <ListItem className="hover:bg-white">
                <ListItemPrefix>
                  <FolderIcon className="h-5 w-5" />
                </ListItemPrefix>
                  Pesanan
                </ListItem>
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <MapIcon className="h-5 w-5" />
                  </ListItemPrefix>
                    Tracking
                </ListItem>
              <ListItem className="hover:bg-white">
                <ListItemPrefix>
                  <CurrencyDollarIcon className="h-5 w-5" />
                </ListItemPrefix>
                  Keuangan
                </ListItem>
              <ListItem className="hover:bg-white focus:bg-white mt-64">
                <Link to={"/login"} className="flex w-1/2">
                  <ListItemPrefix>
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log out
                </Link>
              </ListItem>
              </List>
            </Drawer>
          </React.Fragment>
        </div>
      ) : (
        // Desktop
        <div className="hidden md:flex w-full h-full animate__animated animate__fadeInLeft">
        <Card className="h-[calc(104vh-2rem)] bg-transparent max-w-[20rem] p-4 shadow-none">

            <div className="mb-10 p-4">
              <img src="../../public/assets/admin.png" alt="" />
            </div>
            <List className="gap-5 ml-3">
              <Link to={"/"}>
                <ListItem className="hover:bg-white focus:bg-white focused">
                  <ListItemPrefix>
                    <Squares2X2Icon className="h-5 w-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </Link>
              <ListItem className="hover:bg-white">
                <ListItemPrefix>
                  <FolderIcon className="h-5 w-5" />
                </ListItemPrefix>
                  Pesanan
                </ListItem>
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <MapIcon className="h-5 w-5" />
                  </ListItemPrefix>
                    Tracking
                </ListItem>
              <ListItem className="hover:bg-white">
                <ListItemPrefix>
                  <CurrencyDollarIcon className="h-5 w-5" />
                </ListItemPrefix>
                  Keuangan
                </ListItem>
              <ListItem className="hover:bg-white focus:bg-white mt-64">
                <Link to={"/login"} className="flex w-1/2">
                  <ListItemPrefix>
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log out
                </Link>
              </ListItem>
              <button className="toggle-theme hover:bg-white focus:bg-white md:rounded-3xl" onClick={toggleDarkMode}>
                <LightBulbIcon className={`h-10 w-10 ${darkMode ? 'text-red-900' : 'text-[#B22222]'}`} />
              </button>
            </List>
          </Card>
        </div>
      )}
    </div>
  );
}
