import React from "react";

const Content = ({ content, children }) => {
  return (
    <div className="h-full">
      <span className="text-white font-semibold text-3xl">{content}</span>
      {children}
    </div>
  );
};

export default Content;
