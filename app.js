// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 3000

// cookie and session
const cookieParser = require('cookie-parser')
const session = require('express-session')

// access the cookies from browser
app.use(cookieParser())

// logged user to sessions
app.use(
  session({
    key: 'session_id',
    secret: 'someRandomStuffs',
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 60 * 1000 },
  })
)

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

// 網站首頁
app.get('/', (req, res) => {
  // 已登入狀態，找出對應使用者，顯示頁面
  if (req.session.user) {
    res.render('index', { firstName: req.session.user.firstName })
  }
  // 未登入狀態，引導至登入路由
  else {
    res.redirect('/login')
  }
})

// 登入頁面
app.get('/login', (req, res) => {
  console.log(req.session.status)
  // 已登入狀態，引導至首頁路由
  if (req.session.user) {
    res.redirect('/')
  }
  // 未登入狀態，顯示登入頁面 ( error show email )
  else res.render('login', { email: req.query.email, error: Boolean(req.query.email) })
})

app.post('/login', (req, res) => {
  // 按下登入鍵後清除瀏覽器暫存
  res.clearCookie('session_id')

  // 比對使用者資料
  const { email, password } = req.body
  const user = users.find((user) => user.email === email && user.password === password)

  // 帳號密碼吻合，有找到使用者，紀錄 cookie，引導至首頁
  if (user) {
    // res.cookie('session_id', req.sessionID, { maxAge: 60 * 1000, httpOnly: true })
    req.session.user = { firstName: user.firstName, email: user.email }
    res.redirect('/')
  }
  // 資料不吻合，引導至登入頁面 ( 顯示先前的 email )
  else {
    res.redirect(`/login?email=${email}`)
  }
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log('App is running on http://localhost:3000')
})
