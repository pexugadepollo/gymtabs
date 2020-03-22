const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = {
    Query: {
        allUsers(root, args, context) {
            return context.prisma.users()
        },
        user(root, args, context) {
            return context.prisma.user({ id: args.userID })
        },
    },
    Mutation: {
        createUser(root, args, context) {
            return context.prisma.createUser({
                username: args.username,
                password: args.password,
                nombre: args.nombre,
                apellidos: args.apellidos,
                email: args.email,
                peso: args.peso,
                rol: args.rol,
                altura: args.altura
            })
        },
    },
}
const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
        prisma,
    },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
