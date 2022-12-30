import React, { useState } from "react";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { SketchPicker } from "react-color";
import { Menu } from "antd";

export default function InputColor({
  error,
  name,
  defaultValue,
  setValue = () => {},
}) {
  const [internalColor, setInternalColor] = useState(defaultValue);
  const overlay = (
    <SketchPicker
      color={internalColor}
      onChangeComplete={(color) => {
        setInternalColor(color.hex);
        setValue(name, color.hex);
      }}
    />
  );

  return (
    <>
      <div className={`flex flex-col`}>
        <div className="flex justify-between mb-3">
          <label htmlFor="" className={`ml-2 font-semibold text-white`}>
            {`Background Color`}
          </label>
          {error?.message && (
            <label htmlFor="" className="text-red-600 mr-3">
              {error?.message}
            </label>
          )}
        </div>
        <div className="relative">
          <Input
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={internalColor || ""}
            onChange={(e) => {
              setInternalColor(e.target.value);
              setValue(name, e.target.value);
            }}
          />
          <Dropdown trigger={["click"]} overlay={overlay}>
            <Button
              style={{ background: internalColor }}
              className="absolute right-3 -translate-y-[50%] top-[50%]"
            >
              {" "}
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
