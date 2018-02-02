const Post = require('../models').Post,
      Promise = require('bluebird'),
      fs = Promise.promisifyAll(require('fs')),
      path = require('path');

module.exports = {
  create: (req, res) => {
    return Post.create({
        title: req.body.title,
        path: req.body.path,
        author: req.body.author
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error))
  },
  getOne: (req, res) => {
    var post = {};
    return Post.findOne({ where: { id: req.params.id }})
      .then(data => {
        post = data;
        var filePath = path.join(__dirname, `../../markdown/${data.dataValues.path}`);
        return fs.readFileAsync(filePath, 'utf-8');
      })
      .then(file => {
        post.dataValues.file = file;
        return post
      })
      .then((post) => res.status(201).send(post))
      .catch(error => res.status(400).send(error))
  },
  getAll: (req, res) => {
    return Post.findAll()
      .then(posts => res.status(201).send(posts))
      .catch(error => res.status(400).send(error))
  },
  update: (req, res) => {
    return Post.findById(req.params.id)
      .then(post => post.updateAttributes(req.body.update))
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error))
  },
  delete: (req, res) => {
    return Post.destroy({ where: { id: req.params.id }})
      .then(() => res.status(201).send({ msg: "Post deleted successfully" }))
      .catch(error => res.status(400).send(error))
  }
};