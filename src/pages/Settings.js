import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Content } from "../components/index";
import { ValidSetting } from "../utils/validation/ValidSetting";
import { InputColor, InputForm } from "../elements/input/index";
import DropDownDatePicker from "../elements/dropdown/DropDownDatePicker";
import Button from "../elements/button/Button";
import { useAppContext } from "../services/context/AppContext";
const Settings = () => {
  const { state, dispatch } = useAppContext();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ValidSetting),
    defaultValues: useMemo(() => ({ ...state?.settings }), [state?.settings]),
    reValidateMode: "onChange",
  });

  const onSubmitHandler = (values) => {
    console.log(values)
    dispatch({
      type: "SAVE_SETTING",
      payload: values,
    });
  };
  return (
    <Content content={`Settings`}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
        onKeyDown={(e) => {
          if (e.code === "Enter") e.preventDefault();
        }}
      >
        <div className="grid grid-cols-2 gap-x-10 my-5">
          <InputForm
            label={`Title`}
            classLabel={`text-white`}
            control={control}
            name="Title"
            error={errors?.Title}
          />
          <InputForm
            label={`Email`}
            classLabel={`text-white`}
            control={control}
            name="Email"
            error={errors?.Email}
          />
          <InputColor
            name="Bg"
            setValue={setValue}
            error={errors?.Bg}
            defaultValue={state?.settings?.Bg}
          />
          <DropDownDatePicker
            label={`Active Date`}
            control={control}
            name="ActiveDate"
            setValue={setValue}
            defaultValue={state?.settings?.ActiveDate}
          />
        </div>
        <div className="text-center mt-10">
          <Button hidden={false}>Submit</Button>
        </div>
      </form>
    </Content>
  );
};

export default Settings;
