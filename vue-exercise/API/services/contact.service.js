const contacts = require("../models/contact.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const _ = require("lodash");

class contactService {
  async getAllContacts(req, res) {
    console.log(req.query);
    const { page, limit, sortOrder, search } = req.query;
    const options = {
      page,
      limit,
      sort: {
        createdAt: Number(sortOrder) > 0 ? 1 : -1,
      },
    };
    // console.log(search)
    const aggregate = contacts.aggregate([
      ...(search
        ? [
            {
              $match: {
                $or: [
                  { firstName: search },
                  { lastName: search },
                  { email: search },
                  { phone: search },
                ],
              },
            },
          ]
        : []),
        {
            $match: {
                isActive: true
            }
        }
    ]);
    const result = await contacts.aggregatePaginate(aggregate, options);
    console.log(result);
    res.send(result);
  }

  async addContact(req, res) {
    console.log(req.body);
    let contact = req.body;

    let contactExists = await contacts.findOne({ email: contact.email });
    if (contactExists) {
      return res.status(500).send("Contact already exists");
    }

    let newContact = new contacts(contact);

    try {
      const result = await newContact.save();
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }

  async getContact(req, res) {
    let { contactId } = req.params;
    let contact = await contacts.findOne({ _id: ObjectId(contactId) });
    if (_.isEmpty(contact)) {
      return res.status(404).send("No contact found");
    }
    res.send(contact);
  }

  async updateContact(req, res) {
    const updatedContact = req.body;
    let existingContact = await contacts.findOne({
      _id: ObjectId(req.params.contactId),
    });
    let existingContactWithSameEmail = await contacts.findOne({
      email: updatedContact.email,
    });
    if (
      existingContactWithSameEmail &&
      req.body.email !== existingContact.email
    ) {
      return res.status(500).send("User already exists with same email");
    }
    Object.assign(existingContact, updatedContact);
    try {
      const result = await existingContact.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async deleteContact(req, res) {
    const { contactId } = req.params;
    try {
      let contactToDelete = await contacts.findOneAndUpdate(
        { _id: ObjectId(contactId) },
        {
          $set: {
            isActive: false,
          },
        }
      );
      const result = await contactToDelete.save();
      res.send(result);
      console.log(contactToDelete);
    } catch (err) {
      console.log(err, "call");
    }
  }
}

module.exports = contactService;
