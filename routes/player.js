const router = require('express').Router();
const controllers = require('../controllers');

// player index
router.get('/load/:id', controllers.player.index);

// player Create
router.post('/', controllers.player.create);

// player get
router.get('/:id', controllers.player.show);

// player Update
router.put('/:id', controllers.player.update);

// player Delete
router.delete('/:id', controllers.player.destroy);

module.exports = router;
