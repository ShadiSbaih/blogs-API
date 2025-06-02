import joi from "joi";
//with 3
export const createBlogSchema = joi.object({
  title: joi.string().min(3).max(20).required(),
  description: joi.string().min(10).required(),
});

export const blogDetailsSchema = joi.object({
  id: joi.number().min(1).required(),
});

// with 1 and 2
// export const createBlogSchema = {
//     body: joi.object({
//       title: joi.string().min(3).max(20).required(),
//       description: joi.string().min(10).required(),
//     }),
//   };
//   export const blogDetailsSchema = {
//     params: joi.object({
//       id: joi.number().min(1).required(),
//     }),
//   };
