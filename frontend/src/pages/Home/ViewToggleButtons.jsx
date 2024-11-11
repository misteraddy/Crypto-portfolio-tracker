// components/ViewToggleButtons.js

import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function ViewToggleButtons() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 shadow-2xl">
      <Button
        className="dark:border-white"
        onClick={() => navigate("/home/")}
        variant="outline"
      >
        Grid
      </Button>
      <Button
        className="dark:border-white"
        onClick={() => navigate("/home/list")}
        variant="outline"
      >
        List
      </Button>
    </div>
  );
}

export default ViewToggleButtons;
