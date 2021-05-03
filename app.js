const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
	res.sendFile( path.join(__dirname, 'client', 'public', 'index.html'))
})

app.get('/special', (req, res) => {
	res.status(418)
	res.set({
		'X-SPECIAL': 'you reached me!'
	})
	res.send('I prefer coffee.')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))

