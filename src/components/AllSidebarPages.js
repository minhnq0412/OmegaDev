import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Posts from "../pages/Posts";
import Settings from "../pages/Settings";
import Revenue from "./dashboard/Revenue";
import Subcription from "./dashboard/Subcription";

const AllSidebarPages = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route element={<Dashboard />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="subscription" element={<Subcription />} />
            <Route path="revenue" element={<Revenue />} />
          </Route>
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AllSidebarPages;
