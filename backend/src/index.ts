import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";

import { TYPE_DEFS } from "./schema";
import { RESOLVERS } from "./resolvers";
import { PersonService } from "./services/person";
import { EventService } from "./services/event";

import type { Context } from "./types";

const APP = express();

const HTTP_SERVER = http.createServer(APP);

const SERVER = new ApolloServer<Context>({
    typeDefs: TYPE_DEFS,
    resolvers: RESOLVERS,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: HTTP_SERVER })],
});

await SERVER.start();

APP.use(
    "/api/graphql",
    express.json(),
    expressMiddleware(SERVER, {
        context: async () => {
            return {
                services: {
                    person: new PersonService(),
                    event: new EventService(),
                },
            };
        },
    })
);

await new Promise<void>((resolve) => HTTP_SERVER.listen({ port: 3000 }, resolve));

console.log(`Backend his ready`);
