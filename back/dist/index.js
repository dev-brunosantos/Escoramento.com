import { app } from "./app.js";
import { config } from "dotenv";
import { bucketExists } from "./configs/awsConfig.js";
config();
const port = process.env.PORT || 8000;
const startServer = async () => {
    await bucketExists();
    app.listen(port, () => {
        console.log(`Servidor rodando na porta: ${port}`);
    });
};
startServer();
//# sourceMappingURL=index.js.map