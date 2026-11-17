
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// Define GraphQL schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// Define resolver
const root = {
    hello: () => {
        return "Hello World";
    }
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Start server
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
});
