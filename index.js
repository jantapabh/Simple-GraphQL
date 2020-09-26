const express = require('express')
const graphqlmiddleware = require('express-graphql')

const app = express()

// app.use('/hello',(req , res) => {
//     res.json({data: 'Hello'})
// })


// app.use('/world',(req , res) => {
//     res.json({data: 'world0'})
// })

app.use(graphqlmiddleware({
    
}))

app.listen(3000)