const Post = require('../models').Post;

module.exports = {
  create: (req, res) => {
    return Post.create({
        title: req.body.title,
        body: req.body.body
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.send(400).send(error))
  },
  getOne: (req, res) => {
    return Post.findOne({ where: { id: req.params.id }})
      .then(post => res.status(201).send(post))
      .catch(error => res.send(400).send(error))
  },
  getAll: (req, res) => {
    return Post.findAll()
      .then(posts => res.status(201).send(posts))
      .catch(error => res.send(400).send(error))
  },
  update: (req, res) => {
    return Post.findById(req.params.id)
      .then(post => post.updateAttributes(req.body.update))
      .then(post => res.status(201).send(post))
      .catch(error => res.send(400).send(error))
  },
  delete: (req, res) => {
    return Post.destroy({ where: { id: req.params.id }})
      .then(() => res.status(201).send({ msg: "Post deleted successfully" }))
      .catch(error => res.send(400).send(error))
  }
};