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
}
`)

const resolver = {
    hello(){
        return 'Hello'
    }
}

app.use(
    graphqlMiddleware({
        schema,
        rootValue: resolver
    }))

app.listen(3000)