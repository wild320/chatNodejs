const express= require('express');
const response = require('../../networks/response')
const controller = require('./controller')
const router = express.Router();


router.post('/', function(req, res){
    controller.addChat(req.body.users)
    .then((data)=>{
        response.success(req, res,data,201);
    }).catch(err=>{
        response.error(req, res,"Error Simulado",400)
    });
});

router.get('/:userId', function(req, res) {    
    controller.listChats(req.params.userId)
    .then((users) => {
        response.success(req, res, users,200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error ', e)
    })
});

module.exports = router;