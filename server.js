const express = require('express');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const port = 3000
const app = express();
require('./data/reddit-db')
require('./controllers/posts')(app)

const exphbs = require('express-handlebars')
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

// Add after body parser initialization
app.use(expressValidator());
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
  res.render('home');
})

app.get('/posts/new', (req,res) => {
  console.log('We just posted a new post')
  res.render('posts-new');
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})