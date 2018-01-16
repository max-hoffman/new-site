const User = require('../models').User;

module.exports = {
  create: (req, res) => {
    return User.create({ name: req.body.name })
      .then(user => res.status(201).send(user))
      .catch(error => res.send(400).send(error))
  },
  getOne: (req, res) => {
    return User.findOne({ where: { id: req.params.id }})
      .then(user => res.status(201).send(user))
      .catch(error => res.send(400).send(error))
  },
  getAll: (req, res) => {
    return User.findAll()
      .then(users => res.status(201).send(users))
      .catch(error => res.send(400).send(error))
  },
  delete: (req, res) => {
    return User.destroy({ where: { id: req.params.id }})
    .then(() => res.status(201).send({ msg: "User deleted successfully" }))
      .catch(error => res.send(400).send(error))
  }
};