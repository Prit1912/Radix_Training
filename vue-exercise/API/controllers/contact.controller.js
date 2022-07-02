const contactService = require("../services/contact.service");

let ContactService = new contactService();

class userController{

    static async getAllContacts(req,res){
        ContactService.getAllContacts(req,res);
    }

    static async addContact(req,res){
        ContactService.addContact(req,res);
    }

    static async updateContact(req,res){
        ContactService.updateContact(req,res);
    }

    static async getContact(req,res){
        ContactService.getContact(req,res);
    }

    static async deleteContact(req,res){
        ContactService.deleteContact(req,res);
    }
}

module.exports = userController;