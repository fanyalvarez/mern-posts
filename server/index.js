import express from 'express'
import router from './routes/posts.routes.js'

const app = express()
app.listen(4000)
app.use(router)

console.log('server is running port ', 4000)