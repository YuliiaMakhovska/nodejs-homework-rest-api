const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers/HttpError");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  const result = isValidObjectId(contactId);
  if (!result) {
    next(HttpError(404, `${contactId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
