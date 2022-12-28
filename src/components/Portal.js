import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);

  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${containerClassName}`}
      style={containerStyle}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={onClose}
      />
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
