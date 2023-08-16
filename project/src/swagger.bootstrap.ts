import { Express } from "express";

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Assets CRUD API Swagger",
      version: "0.1.0",
      description:
        "This is a ASSETS CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Daniel Hdez",
        url: "https://github.com/danielhdezller",
        email: "dhdezllerena94@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./**/*.route.ts"],
};

const swaggerSpecs = swaggerJsdoc(options);

export const swaggerAppBootstrap = (app: Express) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs, { explorer: true })
  );
};
