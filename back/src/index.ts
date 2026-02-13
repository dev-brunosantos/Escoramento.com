import { app } from "./app.js";
import { config } from "dotenv";

config();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))