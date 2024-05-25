import React from "react";
import Header from "../../component/admin/Header";
import Sidebar from "../../component/admin/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      <div className="w-[20%] h-[100vh] bg-[#1f2937]">
        <Sidebar />
      </div>
      <div className="w-[80%] max-h-[100vh]">
        <Header /> {/* height = 70px  */}
        <div className="adminOutler overflow-y-auto">
          <Outlet /> {/* height = calc(100vh - 70px)  */}
        </div>
      </div>
    </div>
  );
};

export default Main;
