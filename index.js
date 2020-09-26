const express = require('express')
const graphqlMiddleware = require('express-graphql')
const { buildSchema } = require('graphql')


const app = express()
// app.use('/hello',(req , res) => {
//     res.json({data: 'Hello'})
// })


// app.use('/world',(req , res) => {
//     res.json({data: 'world0'})
// })

const schema = buildSchema(`
type Query {
    hello: String 
}`
)

app.use(schema)

// app.use(
//     graphqlMiddleware({
//         schema
//     }))

app.listen(3000)