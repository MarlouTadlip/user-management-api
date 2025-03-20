import express from 'express'
import { userRouter } from './routes/user.routes'

const app = express()
const port = 3000

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
})