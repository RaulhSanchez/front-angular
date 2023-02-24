const router = require('express').Router() 
const controller = require('./PorductController')

router.post('/add', controller.Add);
router.get('/getAll', controller.GetAll)
router.get('/:id', controller.GetById)
router.delete('/:id', controller.Delete)

module.exports = router