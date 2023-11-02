import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required!"),
      middleName: yup.string().required("Middle name is required!"),
      lastName: yup.string().required("Last name is required!"),
    }),
    email: yup.string().email().required("Email name is required!"),
    designation: yup.string().required("Designation name is required!"),
    dateOfBirth: yup.string().required("Date Of Birth name is required!"),
  }),
});
