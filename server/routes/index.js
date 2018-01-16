const postsCtrl = require('../controllers').posts,
      usersCtrl = require('../controllers').users,
      router    = require('express').Router();

router.get('/posts', postsCtrl.getAll);
router.post('/posts', postsCtrl.create);
router.get('/posts/:id', postsCtrl.getOne);
router.put('/posts/:id', postsCtrl.update);
router.delete('/posts/:id', postsCtrl.delete);

router.get('/users', usersCtrl.getAll);
router.post('/users', usersCtrl.create);
router.get('/users/:id', usersCtrl.getOne);
router.delete('/users/:id', usersCtrl.delete);

module.exports = router;