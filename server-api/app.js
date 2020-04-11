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
        allEjercicios(root, args, context){
            return context.prisma.ejercicios()
        },
        ejercicio(root, args, context){
            return context.prisma.ejercicio({id: args.ejercicioID})
        }
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
        checkToken(root, args, context){
            let valid = false;
            let userex = {};
            let token = args.token;
            if(!token){
                throw new Error("Es necesario el token de autenticación");
            }
            jwt.verify(token, 'pr<~%SuT:~bV8G8[u5q_!vF-a,v5~as39>uW7~j;p=Hh`4K[ScD4fh>2vA9B.3NP=4ER5~+', function(err, user) {
                if (err) {
                    throw new Error('Token inválido');
                }else{
                    userex=user;
                    valid=true
                }
            })
            return {
                valid: valid,
                user: {
                    username: userex.username,
                    nombre: userex.nombre,
                    apellidos: userex.apellidos,
                    email: userex.email,
                    peso: userex.peso,
                    altura: userex.altura,
                    rol: userex.rol
                }
            }
        },
        async getToken(root, args, context) {
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
                nombre: user.nombre,
                apellidos: user.apellidos,
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
            return {token: token}

        },
        updateUser(root, args, context){
            console.log(args.data)
            return context.prisma.updateUser(
                {
                    where: {id: args.id},
                    data: {
                        username: args.username,
                        nombre: args.nombre,
                        apellidos: args.apellidos,
                        email: args.email,
                        peso: args.peso,
                        altura: args.altura,
                        rol: args.rol,
                        tabla: args.tabla
                    }

                }
            )
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
