const express = require('express'),
      next    = require('next'),
      parser = require('body-parser'),
      morgan = require('morgan'),
      api     = require('./routes'),
      dev     = process.env.NODE_ENV !== 'production',
      app     = next({ dev }),
      handle  = app.getRequestHandler();

init = () => {
  const server = express()
        .use(parser.json())
        .use(parser.urlencoded({ extended: true }))
        .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
        .use('/api', api)

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  });
}

app.prepare()
.then(init)
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});
      