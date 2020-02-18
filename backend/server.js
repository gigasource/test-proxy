const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const socket = require('socket.io');
const http = require('http');
const proxy = require('http-proxy-middleware');

const server = http.Server(app);
const io = socket(server);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(cookieParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(compression());
app.use(cors({origin: '*'}));

// app.post('/test', (req, res) => {
//   return res.send('Hello World!');
// });

// app.get('/', (req, res) => {
//   return res.send('Hello !');
// });

const backendProxy = proxy('/', {
  target: 'http://localhost:8080/',
});

app.use(backendProxy);


app.listen(8888);
