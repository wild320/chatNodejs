const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_wild320:elKzgmJ40Zv7siJ6@cluster0.xiwnw.mongodb.net/test',
    port: process.env.PORT || 3000,
    host: process.env.HOST ||'http://localhost:3000',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    fileRoutes: process.env.FILES_ROUTES || 'files',

};

module.exports = config