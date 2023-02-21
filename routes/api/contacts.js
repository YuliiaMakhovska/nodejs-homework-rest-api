const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validateBody(schemas.updateSchema),
  ctrl.updateContact
);

module.exports = router;
