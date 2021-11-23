// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

// firstName: 'Tony',email: 'tony@stark.com', password: 'iamironman',
const users = [
  {
    firstName: 'test',
    email: 'test',
    password: 'test',
  },
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman',
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday',
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram',
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!',
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password',
  },
]

// handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

//設定 body-parser
app.use(express.urlencoded({ extended: true }))

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  const { email, password } = req.body
  const user = users.find((user) => user.email === email && user.password === password)

  if (user) {
    res.render('index', { firstName: user.firstName })
  } else res.render('login', { email, error: true })
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log('App is running on http://localhost:3000')
})
