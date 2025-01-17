const Contact = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const filters = { owner };
  if (favorite) {
    filters.favorite = favorite;
  }
  const result = await Contact.find(filters, "", {
    skip,
    limit,
  }).populate("owner", "subscription name email");
  res.json(result);
  // ----------------------------------------------------------------------//
  //   if (!favorite) {
  //     const result = await Contact.find({ owner }, "", {
  //       skip,
  //       limit,
  //     }).populate("owner", "subscription name email");
  //     res.json(result);
  //     return;
  //   }
  //   const result = await Contact.find({ owner, favorite }, "", {
  //     skip,
  //     limit,
  //   }).populate("owner", "subscription name email");
  //   res.json(result);
};

// ----------------------------------------------------------------------//
//   if (favorite === "true") {
//     const result = await Contact.find({ owner, favorite: true }, "", {
//       skip,
//       limit,
//     }).populate("owner", "subscription name email");
//     res.json(result);
//   } else if (favorite === "false") {
//     const result = await Contact.find({ owner, favorite: false }, "", {
//       skip,
//       limit,
//     }).populate("owner", "subscription name email");
//     res.json(result);
//   } else {
//     const result = await Contact.find({ owner }, "", {
//       skip,
//       limit,
//     }).populate("owner", "subscription name email");
//     res.json(result);
//   }
// };
// ----------------------------------------------------------------------//
//   const result = await Contact.find(
//     favorite ? { owner, favorite } : { owner },
//     "",
//     {
//       skip,
//       limit,
//     }
//   ).populate("owner", "subscription name email");
//   res.json(result);
// };

const getContactById = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.params);
  const { contactId } = req.params;
  const result = await Contact.findById({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "contact deleted" });
};

const updateContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};
const updateStatusContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};
module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
