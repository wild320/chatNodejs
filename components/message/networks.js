const express= require('express');
const multer = require('multer')
const config = require('../../config');
const response = require('../../networks/response')
const controller = require('./controller')
const router = express.Router();



const upload = multer({
    dest: 'public/' + filesRoute + '/',
});

router.get('/', function(req, res) {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList,200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error ', e)
    })
});


router.post('/', upload.single('file'), function(req, res){
    controller.addMessage(req.body.chat ,req.body.user, req.body.message, req.file)
    .then((fullMessage)=>{
        response.success(req, res,fullMessage,201);
    }).catch(err=>{
        response.error(req, res,"Error Simulado",400)
    });
});

router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data,200);
    })
    .catch(e =>{
        response.error(req, res, 'hubo un  error', 500,e)
    });
});
router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then((data)=>{
        response.success(req,res,`Usuario ${req.params.id} eliminado`,200);
    })
    .catch(e =>{
        response.error(req,res,'Error Interno',500,e);
    })
})

module.exports = router;