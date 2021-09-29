import * as yup from "yup";

const max = 50;
const min = 2;

const schema = yup.object().shape({
  username: yup.string().required().min(min).max(max),
  password: yup.string().required().min(min).max(max),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match").required(),
});

export default schema;
