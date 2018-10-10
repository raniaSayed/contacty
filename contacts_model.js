const mongoose = require("mongoose");
const assert = require("assert");
mongoose.connect("mongodb://localhost:27017/content-manager",{useNewUrlParser: true });
const db = mongoose.connection;

function toLower(v){
    return v.toLowerCase();
}

const contactSchema = mongoose.Schema({
    firstname: {type:String, set: toLower},
    lastname: {type:String, set: toLower},
    phone: {type:String, set: toLower},
    email: {type:String, set: toLower},

});
const Contact = mongoose.model("Contact",contactSchema);

const addContact = (contactObj) =>{
    Contact.create(contactObj,(err)=>{
        assert.equal(null,err);
        console.info("Contact Created!");
        db.close();
    })
}

const getContact  = (name)=>{
    const search = new RegExp(name,"i");
    Contact.find({$or:[{firstname:search},{lastname:search}]})
    .exec((err,contactObjs)=>{
        assert.equal(null,err);
        console.info(contactObjs);
        console.info(`${contactObjs.length} matches found!`);
        db.close();
    });
}
    module.exports = { addContact , getContact };
