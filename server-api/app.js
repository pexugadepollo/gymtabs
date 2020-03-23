const {prisma} = require('./generated/prisma-client')
const {GraphQLServer} = require('graphql-yoga')
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        allUsers(root, args, context) {
            return context.prisma.users()
        },
        user(root, args, context) {
            return context.prisma.user({id: args.userID})
        },
    },
    Mutation: {
        createUser(root, args, context) {
            return context.prisma.createUser({
                username: args.username,
                nombre: args.nombre,
                apellidos: args.apellidos,
                email: args.email,
                peso: args.peso,
                rol: args.rol,
                altura: args.altura
            })
        },
        async login(root, args, context) {
            let token;
            const usernam = args.username;
            const pass = await crypto
                .createHash("sha256")
                .update(args.password)
                .digest("hex");
            const user = await context.prisma.user({username: args.username});
            if (!user) {
                throw new Error(`Usuario no encontrado para: ${usernam}`)
            }
            const valid = pass === user.password;
            if (!valid) {
                throw new Error(`Contraseña incorrecta`);
            }
            const data = {
                username: user.username,
                rol: user.rol,
                altura: user.altura,
                peso: user.peso,
                tabla: user.tabla,
                email: user.email,
                authorized: true
            };
            token = jwt.sign(data, 'pr<~%SuT:~bV8G8[u5q_!vF-a,v5~as39>uW7~j;p=Hh`4K[ScD4fh>2vA9B.3NP=4ER5~+', {
                expiresIn: 60 * 60 * 24 * 7 // 7 días
            });
            return {token: token};

        }
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
