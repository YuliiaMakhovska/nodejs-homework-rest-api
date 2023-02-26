const express = require("express");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", isValidId, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.updateSchema),
  ctrl.updateContact
);

module.exports = router;
