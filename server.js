const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('layouts/main');
})

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})