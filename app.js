const express = require('express')
const EventEmitter = require('events');
const User = require('./user');
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

const bodyParser = require('body-parser')
const eventEmitter = new EventEmitter();
const user = new User(eventEmitter);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())


app.post('/', async (req,res) => {

        const userName = req.body.userName;
        const password = req.body.password;
        eventEmitter.emit('homepage_posted', { userName: userName, password: password })

        res.send(`Hello ${userName}`);
    
})

eventEmitter.on('homepage_posted', ({ userName, password }) => {
        
    console.log(userName[0], password[0]);
    
})

app.listen(port, () => console.log(`Example app listening on port ${ port }!`))

