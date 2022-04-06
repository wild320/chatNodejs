const message = require('../components/message/networks')
const user = require('../components/user/networks')
const chat = require('../components/chat/networks')

const routes = function(server){
    server.use('/message',message);  
    server.use('/user',user);  
    server.use('/chat',user);
}

module.exports = routes;