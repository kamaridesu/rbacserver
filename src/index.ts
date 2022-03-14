import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { graphql } from "graphql";
import ip = require("ip");
import express = require("express");
import cors = require("cors");
import fs = require("fs");
import path = require("path");

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(cors());

async function main() {
  const schema = await buildSchema({
    resolvers: [
      path.join(__dirname, "../prisma/generated/type-graphql"),
      path.join(__dirname, "/resolvers/*.{ts,js}"),
    ],
    validate: true,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }): any => ({ prisma, req, res }),
    introspection: true,
  });

  await server.start();
  server.applyMiddleware({ app, cors: false });

  app.listen({ port: `${PORT}` }, () => {
    console.log(
      `🚀  Server ready at {
        express: https://${ip.address()}:${PORT}, 
        graphql: https://${ip.address()}:${PORT}/graphql
        graphql: http://localhost:${PORT}/graphql
      }`
    );
  });
}

main().catch(console.error);
