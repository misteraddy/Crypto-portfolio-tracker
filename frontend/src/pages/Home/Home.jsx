// Home.js

import React from "react";
import { Outlet } from "react-router-dom";
import SearchContainer from "@/components/Search/SearchContainer";
import ViewToggleButtons from "./ViewToggleButtons";

function Home() {
  return (
    <>
      <div className="min-h-[20vh] dark:border-white flex justify-center items-center">
        <SearchContainer />
      </div>
      <ViewToggleButtons />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
