const express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const port = 3002

app.use(express.static('public'))

// app.get('/', (req, res) => res.sendFile(__dirname + '/public/template.yml'))
// app.get('/template/paragraph', (req, res) => res.sendFile(__dirname + '/public/template/paragraph'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
