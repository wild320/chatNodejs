const express= require('express');
const response = require('../../networks/response')
const controller = require('./controller')
const router = express.Router();

router.get('/', function(req, res) {
    controller.getMessages()
    .then((messageList) => {
        response.success(req, res, messageList,200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error ', e)
    })
});


router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req, res,fullMessage,201);
    }).catch(err=>{
        response.error(req, res,"Error Simulado",400)
    })
});

router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data,200);
    })
    .catch(e =>{
        response.error(req, res, 'hubo un  error', 500,e)
    });
})

module.exports = router;