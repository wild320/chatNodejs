const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;

db.connect('mongodb+srv://db_wild320:elKzgmJ40Zv7siJ6@cluster0.xiwnw.mongodb.net/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
console.log('[db] Conexion exitosa');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}
async function getMessages() {
    const messages = await Model.find();
    return messages;
}

async function updateText(id,message) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = foundMessage.save();
    return newMessage;

}
module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
}