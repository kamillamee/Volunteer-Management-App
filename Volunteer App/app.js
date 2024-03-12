const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.static('public'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Volunteer Management App listening at http://localhost:${port}`));