import * as yup from "yup";

export const ValidSetting = yup
  .object({
    Title: yup.string().required("Dữ liệu bắt buộc"),
    Email: yup.string().required("Dữ liệu bắt buộc"),
    Bg: yup.string().required("Dữ liệu bắt buộc"),
    ActiveDate: yup.string().required("Dữ liệu bắt buộc"),
  })
  .required();
