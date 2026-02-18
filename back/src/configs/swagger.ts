import swaggerJsdoc from "swagger-jsdoc";
import { config } from "dotenv";

config()

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentação da API",
      version: "1.0.0",
      description: "API de gerenciamento de usuários",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
            document: { type: "string" },
            image: { type: "string" },
            role: { type: "string", enum: ["ADMIN", "CLIENT"] },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" }
          }
        },
        LoginRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" }
          }
        },
        LoginResponse: {
          type: "object",
          properties: {
            token: { type: "string" },
            user: { $ref: "#/components/schemas/User" }
          }
        }
      }
    }
  },
  apis: [
    "./src/routes/*.ts",
    "./src/app.ts"
  ],
});


// export const swaggerSpec = swaggerJsdoc(options);
