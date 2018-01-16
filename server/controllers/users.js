const User = require('../models').User;

module.exports = {
  create: (req, res) => {
    return User.create({
        title: req.body.title,
        body: req.body.body
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.send(400).send(error))
  },
  getOne: (req, res) => {
    return User.findById(req.body.id)
      .then(user => res.status(201).send(user))
      .catch(error => res.send(400).send(error))
  },
  delete: (req, res) => {
    return User.destroy(req.body.id)
      .then(user => res.status(201).send(user))
      .catch(error => res.send(400).send(error))
  }
};