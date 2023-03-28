import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

type PaperProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
  paperClassName?: string;
  title?: string;
};

const Paper: FunctionComponent<PaperProps> = ({
  children,
  childrenClassName,
  paperClassName,
  title,
}) => {
  return (
    <div className={`flex flex-col shadow-md shadow-orange-400 rounded-lg w-full px-8 py-6 gap-4 ${paperClassName}`}>
      {title && <div className={``}>{title}</div>}
      <div className={`flex flex-row justify-start flex-wrap w-full gap-4 ${childrenClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Paper;
