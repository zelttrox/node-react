const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get('/api/message', (request, response) => {
    response.json({ message: 'Hello from the backend' })
})

app.listen(5000, () => {
    console.log(`Server is now running`);
})
