const express = require("express")
require('./db/mongoose')
require('./services/passport')
const authRouter = require('./routes/authRoutes')

const app = express()

// Middlewares
app.use(authRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
