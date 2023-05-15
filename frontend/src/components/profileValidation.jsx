import * as Yup from "yup";

const phoneRegExp = /^[6-9]\d{9}$/;

export const validation = Yup.object({
  name: Yup.string()
    .max(20, "Name must be between 3 to 20 characters !")
    .min(3)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain Alphabets letters."
    )
    .required("Required field !"),
  email: Yup.string()
    .email("email must be a valid")
    .required("Required field !"),
  phone: Yup.string()
    .matches(phoneRegExp, "Please enter the valid phone number !")
    .required("Reuired field !"),
  DOB: Yup.string().required("Required"),
  // .max(
  //   new Date(Date.now() - 567648000000),
  //   "You must be at least 18 years old !"
  // )
  // interests: Yup.required("required"),
});
