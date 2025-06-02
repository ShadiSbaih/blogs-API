export const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
        return res.status(500).json({message:"server error",error: error.message, stack: error.stack});
    }
  };
};
