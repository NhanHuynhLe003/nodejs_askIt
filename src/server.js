const express = require('express')
const { default: configViewEngine } = require('./config/viewEngines')
const app = express()
const port = 4500

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('home.ejs')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})