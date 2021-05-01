const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('welcome to the party!')
})

app.get('/special', (req, res) => {
	res.status(418)
	res.set({
		'X-SPECIAL': 'you reached me!'
	})
	res.send('I prefer coffee.')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))

