import * as yup from "yup";

export const ValidSetting = yup
  .object({
    Title: yup.string().required("Dữ liệu bắt buộc"),
    Email: yup
      .string()
      .required("Dữ liệu bắt buộc")
      .email("Email không hợp lệ")
      .matches(/^(?!.*@[^,]*,)/),
    Bg: yup.string().required("Dữ liệu bắt buộc"),
    ActiveDate: yup.string().required("Dữ liệu bắt buộc"),
  })
  .required();
