import React, { useEffect } from "react";
import { useFormik } from "formik";
import Error from "../../components/Error";
import validationSchema from "./validations";
import { useAuth } from "../../contexts/AuthContext";
import { fetchUsers } from "../../api";
const SigninForm = ({ history }) => {
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
    },
    onSubmit: async (values, bag) => {
      try {
        const response = await fetchUsers({
          username: values.username,
          password: values.password,
        });
        let userExist = false;
        response.map((u, i) => {
          if (
            u.username === values.username &&
            u.password === values.password
          ) {
            console.log({u})
            userExist = true;
            login({
              username: values.username,
              password: values.password,
              score:u.score,
              id:u.id,
            });
            history.push("/");
          }
        });
        if (!userExist) {
          console.log("check the information you entered");
          bag.setErrors({ general: "Check the information you entered." });
        }
      } catch (e) {
        //console.log(e.data.message);
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
            <h1 className="text-center text-lg p-2 m-3">Sign in</h1>
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
            {errors.general && (
              <Error message={errors.general} />
            )}
            <button
              onSubmit={() => {}}
              className=" bg-green-600 rounded-lg p-2 m-3 text-center text-white "
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
