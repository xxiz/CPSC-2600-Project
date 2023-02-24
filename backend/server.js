let express = require('express');
let app = express();

app.set('port', (process.env.PORT || 5000));

let server = app.listen(app.get('port'), function() {
    console.log('Listening on port', server.address().port);
});

const apiRouter = express.Router();
app.use('/api/v1', apiRouter);;

const userController = require('./controllers/userController');
apiRouter.get('/income', incomeController.index);
apiRouter.get('/income/:id', incomeController.show);
apiRouter