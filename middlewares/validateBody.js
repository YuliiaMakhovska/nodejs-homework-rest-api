const { HttpError } = require("../helpers");

// const validateBody = (schema) => {
//     const func = (req, res, next) = {
// const { error } = addSchema.validate(req.body);
// if (error) {
//   throw HttpError(400, "missing required name field");
// }
//   };
// };
const validateBody = (schema) => {
  const valFunc = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return valFunc;
};

module.exports = validateBody;
