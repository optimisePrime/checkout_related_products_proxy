const Express = require('express');
const Path = require('path');
const httpReq = require('axios');
const port = process.env.PORT || 5000;

const app = Express();

app.use('/:productId', Express.static(Path.join(__dirname, '../public')));

//review
app.get('/reviews/all/:productid', (req, res) => {
  const productId = req.params.productid;
  httpReq
    .get(
      `http://reviewloadbalancer-438610705.us-west-1.elb.amazonaws.com/reviews/all/${productId}`,
    )
    .then(reviews => {
      res.status(200).send(reviews.data);
    })
    .catch(error => {
      res.status(501).send(error);
    });
});

//checkout
app.get('/items/:id', (req, res) => {
  const productId = req.params.id;
  httpReq
    .get(
      `http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/items/${productId}`,
    )
    .then(items => {
      res.status(200).send(items.data);
    })
    .catch(error => {
      res.status(501).send(error);
    });
});

app.get('/items/:id/related', (req, res) => {
  const productId = req.params.id;
  httpReq
    .get(
      `http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/items/${productId}/related`,
    )
    .then(related => {
      res.status(200).send(related.data);
    })
    .catch(error => {
      res.status(501).send(error);
    });
});

app.get('/products/:productId', function(req, res) {
  let id = req.params.productId;
  httpReq
    .get(
      `http://ec2-13-59-133-55.us-east-2.compute.amazonaws.com:9000/products/${id}`,
    )
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(501).send(error);
    });
});

app.get('/photos/:productId', function(req, res) {
  let id = req.params.productId;
  httpReq
    .get(
      `http://ec2-13-59-133-55.us-east-2.compute.amazonaws.com:9000/photos/${id}`,
    )
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(501).send(error);
    });
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});

/*
// reviews
app.get('/reviews/all/:productid', (req, res) => {
  const productId = req.params.productid;
  httpReq
    .get(
      `http://reviewloadbalancer-438610705.us-west-1.elb.amazonaws.com/reviews/all/${productId}`,
    )
    .then(reviews => {
      res.status(200).send(reviews.data);
    })
    .catch(error => {
      res.status(501).send(error);
    });
});

// checkout
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  httpReq
    .get(
      `http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/items/${id}`,
    )
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(501).send(err);
    });
});

app.get('/cart/list', (req, res) => {
  httpReq
    .get(
      `http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/cart/list`,
    )
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(501).send(err);
    });
});

app.get('/items/:id/related', (req, res) => {
  const id = req.params.id;
  httpReq
    .get(
      `http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/items/${id}/related`,
    )
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(501).send(err);
    });
});

app.post('/cart/:id', (req, res) => {
  const id = req.params.id;
  httpReq
    .get(
      `http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/cart/${id}`,
    )
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(501).send(err);
    });
});

app.patch('/cart/:id', (req, res) => {
  const id = req.params.id;
  httpReq
    .get(
      `http://http://ec2-3-16-24-103.us-east-2.compute.amazonaws.com/cart/${id}`,
    )
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(501).send(err);
    });
});

app.listen(Port, () => {
  console.log('listening on port ' + Port);
});
*/
