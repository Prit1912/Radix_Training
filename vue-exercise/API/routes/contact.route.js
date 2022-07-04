const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/',contactController.getAllContacts);

router.post('/',contactController.addContact);

router.get('/:contactId',contactController.getContact)

router.patch('/:contactId',contactController.updateContact);

router.delete('/:contactId',contactController.deleteContact);

module.exports = router;