import * as yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export const FormSchema = yup.object().shape({
  fullname: yup.string().required("Please enter the fullname"),
  phone: yup
    .string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Please enter the Phone number"),
  province: yup.string().required("Please enter the province"),
  city: yup.string().required("Please enter the city"),
  area: yup.string().required("Please enter the area"),
  address: yup.string().required("Please enter the address"),
  landmark: yup.string(),
});
