import React, { useState } from "react";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { SketchPicker } from "react-color";

export default function InputColor(props) {
  const { color, onChange } = props;
  const [internalColor, setInternalColor] = useState(color);


  const overlay = (
    <div>
      <SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setInternalColor(color.hex);
        }}
      />
    </div>
  );

  return (
    <>
      <Input
        value={internalColor || ""}
        onChange={(e) => setInternalColor(e.target.value)}
        suffix={
          <Dropdown trigger={["click"]} overlay={overlay}>
            <Button style={{ background: internalColor }}> </Button>
          </Dropdown>
        }
      />
    </>
  );
}
