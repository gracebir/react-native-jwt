/** @format */

import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("please the correct email addresss")
        .required("This field is required"),
    password: yup
        .string()
        .min(8, "must be at least 8 character")
        .required("Password is required"),
});

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("please the correct email addresss")
        .required("This field is required"),
    password: yup
        .string()
        .min(8, "must be at least 8 character")
        .required("Password is required"),
});
