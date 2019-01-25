const Express = require('express');
const Path = require('path');
const httpReq = require('axios');
const Port = 3000;

const app = Express();

app.use('/:productId', Express.static(Path.join(__dirname, 'public')));

// reviews
app.get('/reviews/all/:productid', (req, res) => {
  const productId = req.params.productid;
  httpReq.get(`http://reviewloadbalancer-438610705.us-west-1.elb.amazonaws.com/reviews/all/${productId}`)
  .then((reviews) => {
    res.status(200).send(reviews.data);
  })
  .catch((error) => {
    res.status(501).send(error);
  });
})

// checkout
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  httpReq.get(`http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/items/${id}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(501).send(err)
  })
}

app.get('/cart/list', (req, res) => {
  httpReq.get(`http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/cart/list`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(501).send(err)
  })
}

app.get('/items/:id/related', (req, res) => {
  const id = req.params.id;
  httpReq.get(`http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/items/${id}/related`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(501).send(err)
  })
}

app.post('/cart/:id', (req, res) => {
  const id = req.params.id;
  httpReq.get(`http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/cart/${id}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(501).send(err)
  })
}

app.patch('/cart/:id',  (req, res) => {
  const id = req.params.id;
  httpReq.get(`http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/cart/${id}`)
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((err) => {
    res.status(501).send(err)
  })
}

app.listen(Port, () => { console.log('listening on port ' + Port)});
