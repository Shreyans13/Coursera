const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const hostname = 'localhost'
const port = 3000

const app = express();

const dishRouter = require('./routes/dishRouter')

app.use(morgan('dev'));
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.use('/dishes',dishRouter)
app.use('/dishes/:dishId', dishRouter)

// app.get('/dishes/:dishId',(req, res, next) => {
// 	res.end("Will send the details of the dish: " + req.params.dishId + " to you!!")
// })

// app.post('/dishes/:dishId', (req, res, next) => {
// 	res.statusCode = 403
// 	res.end('POST operation bot supported on /dishes/' + req.params.dishId)
// })

// app.put('/dishes/:dishId', (req, res, next) => {
// 	res.write('Updating their dish: ' + req.params.dishId)
// 	res.end('\nWill update their dish: ' + req.body.name + " with details " + req.body.description )
// })

// app.delete('/dishes/:dishId', (req, res, next) => {
// 	res.end("Deletig dish: " + req.params.dishId)
// })

app.use((req,res,next) =>{
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html')
	res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
})