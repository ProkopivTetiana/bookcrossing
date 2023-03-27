import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex">
      <NavLink to={`/`}>
          <div className="text-2xl font-bold text-orange-600">BookXchange</div>
      </NavLink>
    </div>
  );
};

export default Logo;
