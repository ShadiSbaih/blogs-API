import {
  registerSchema,
  loginSchema,
} from "../modules/authentication/auth.validation.js";
import AppError from "../utils/appError.js";
import Joi from "joi";

//3

const validation = (schema) => {
  return (req, res, next) => {
    const inputData = { ...req.body, ...req.params };
    const { error } = schema.validate(inputData, { abortEarly: false });
    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return next(new AppError(errorMessage, 400));
    }
    next();
  };
};

//2
// const validation = (schema) => {
//   return (req, res, next) => {
//       const methods = ['body', 'params'];
//       const errors = [];
//       methods.forEach((key) => {
//           if (schema[key]) {
//               const validate = schema[key].validate(req[key], { abortEarly: false });
//               if (validate.error) {
//                   errors.push(validate.error);
//               }
//           }
//       });
//       if (errors.length > 0) {
//           return next(new AppError(errors, 400));
//       }
//       next();
//   };
// };

//1
// const validation = (schema,method="body") => {
//   return async (req, res, next) => {
//     try {
//       await schema.validateAsync(req[method], { abortEarly: false });
//       next();
//     } catch (error) {
//       res.status(400).json({ message: error.message, details: error.details });
//     }
//   };
// };

export default validation;
