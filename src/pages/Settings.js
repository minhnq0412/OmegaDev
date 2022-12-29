import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Content from "../components/Content";
import { ValidSetting } from "../utils/validation/ValidSetting";
import InputForm from "../components/InputForm";
import Button from "../elements/Button";
// import InputColor from "../components/InputColor";
import DropDownDatePicker from "../components/DropDownDatePicker";
import InputColor from "../elements/input/InputColor";

const Settings = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ValidSetting),
    reValidateMode: "onChange",
  });
  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <Content content={`Settings`}>
      <form
        className="grid grid-cols-2 gap-5 my-5"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
        onKeyDown={(e) => {
          if (e.code === "Enter") e.preventDefault();
        }}
      >
        <InputForm
          label={`Title`}
          classLabel={`text-white`}
          control={control}
          name="Title"
          error={errors?.Title}
        ></InputForm>
        <InputForm
          label={`Email`}
          classLabel={`text-white`}
          control={control}
          name="Email"
          error={errors?.Email}
        ></InputForm>
        <InputForm
          label={`Background Color`}
          classLabel={`text-white`}
          control={control}
          name="Bg"
          error={errors?.Bg}
          //type={`color`}
        ></InputForm>
        <InputColor />

        <DropDownDatePicker
          label={`Active Date`}
          properties={"flex-1 max-h-[46px]"}
          control={control}
          name="ActiveDate"
          setValue={setValue}
        />
        <Button hidden={true}>Submit</Button>
      </form>
    </Content>
  );
};

export default Settings;
