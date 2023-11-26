import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";

import { TYPE_DEFS } from "./schema";
import { RESOLVERS } from "./resolvers";

const APP = express();

const HTTP_SERVER = http.createServer(APP);

const SERVER = new ApolloServer({
    typeDefs: TYPE_DEFS,
    resolvers: RESOLVERS,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: HTTP_SERVER })],
});

await SERVER.start();

APP.use("/api/graphql", express.json(), expressMiddleware(SERVER));

await new Promise<void>((resolve) => HTTP_SERVER.listen({ port: 3000 }, resolve));

console.log(`🚀 Server ready at http://localhost:3000/api/graphql`);
