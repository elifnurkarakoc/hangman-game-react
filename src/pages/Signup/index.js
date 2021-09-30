import React, { useEffect } from "react";
import Error from "../../components/Error";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { fetchRegister } from "../../api";

import { useAuth } from "../../contexts/AuthContext";
const Signup = ({ history }) => {
  const { login } = useAuth();
  const {
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      try {
        const response = await fetchRegister({
          username: values.username,
          password: values.password,
          score:0,
        });
        console.log(response);

        login({
          username: values.username,
          password: values.password,
          id: response.id,
          score: 0,
        });
        history.push("/");
      } catch (e) {
        console.log(e.data.message);
        bag.setErrors({ general: e.response.data.message });
      }
    },
    validationSchema,
  });

  return (
    <div className="flex justify-center ">
      <form className="w-3/5" onSubmit={handleSubmit} autoComplete="off">
        <div className="flex flex-col bg-gray-100 justify-center rounded-lg">
          <div className="flex flex-col items-center shadow-sm">
            <h1 className="text-center text-lg p-2 m-3">Sign up</h1>
            <input
              className="block border border-gray-200 rounded-lg p-2 m-3 w-3/5 "
              type="text"
              name="username"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && (
              <Error message={errors.username} />
            )}
            <input
              className="block border border-gray-200 rounded-lg p-2 m-3  w-3/5"
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <Error message={errors.password} />
            )}
            <input
              className="block border border-gray-200 rounded-lg p-2 m-3  w-3/5"
              type="password"
              name="passwordConfirm"
              placeholder="password confirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <Error message={errors.passwordConfirm} />
            )}
            {errors.general && <Error message={errors.general} />}
            <button
              onClick={() => {}}
              className=" bg-green-600 rounded-lg p-2 m-3 text-center text-white "
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
