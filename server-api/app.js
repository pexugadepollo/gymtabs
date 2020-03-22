const userController = require("./src/controllers/userController");
let mongoose = require('mongoose');
const { GraphQLServer } = require('graphql-yoga');

let users = userController.findAllUsers;
const resolvers = {
    Query:{
        user: () => users,
    },
  User: {
      id: (parent) => parent.id,
      username: (parent) => parent.username,
      nombre: (parent) => parent.nombre,
      apellidos: (parent) => parent.apellidos,
      email: (parent) => parent.email,
      peso: (parent) => parent.peso,
      altura: (parent) => parent.altura,
      rol: (parent) => parent.rol,
      tabla: (parent) => parent.tabla

  }
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));


