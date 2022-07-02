const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/',contactController.getAllContacts);

router.post('/',contactController.addContact);

router.get('/:userId',contactController.getContact)

router.patch('/:userId',contactController.updateContact);

router.delete('/:userId',contactController.deleteContact);

module.exports = router;