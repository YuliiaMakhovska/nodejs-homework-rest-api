const express = require("express");

const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");
const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.updateSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavorite),
  ctrl.updateStatusContact
);

module.exports = router;
