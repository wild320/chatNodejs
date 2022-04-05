const db = require('mongoose');

db.Promise = global.Promise;

//'mongodb+srv://db_wild320:elKzgmJ40Zv7siJ6@cluster0.xiwnw.mongodb.net/test'

async function connect(url){
    await db.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
console.log('[db] Conexion exitosa');

}

module.exports = connect;