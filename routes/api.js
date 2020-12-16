const router = require('express').Router();

const controller = require('../controller/controller')

router.get('/genres', controller.getMovie);



router.post('/genres', controller.addMovie)



router.put('/genres/:id', controller.updateMovie);

router.delete('/genres/:id', controller.deleteMovie)


module.exports = router;