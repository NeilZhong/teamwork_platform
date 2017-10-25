var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

app.get('/users', user.list);  
app.get('/users/:id', user.get);  
app.delete('/users/:id', user.delete);  
app.post('/users', user.add);  
app.put('/users/:id', user.update);  
