import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import SideBar from "./sidebar";
import Users from "./users";
import Posts from "./posts";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />

      <Outlet />
    </div>
  );
};

export default Dashboard;
