const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8080

app.use(express.json())
app.use(cookieParser())

app.get('/login', (req, res) => {
	const name = req.query.name
	res.cookie('name', name)
	res.send(`Hello ${name}!`)
})

app.get('/hello', (req, res) => {
	if (req.cookies.name) {
		res.send(`Welcome ${req.cookies.name}`)
	}
})

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
