const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	var cookie = req.query.cookie;

  console.log('New cookie '+cookie);
  res.send('Saludos a la bandita del CTF')
  })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})