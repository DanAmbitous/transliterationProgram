const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 9859

app.use('/', express.static(path.join(__dirname, 'static')))

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))