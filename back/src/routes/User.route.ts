import { Router, type Request, type Response } from "express";
import { UserController } from "../controllers/UserController.js";
import { s3Upload } from "../configs/awsConfig.js";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/users', s3Upload.single('image'), async (req: Request, res: Response) => {
    return await userController.create(req, res);
})

// userRoutes.get('/users', async (req: Request, res: Response) => {
//     return await userController.getAll(req, res);
// })

userRoutes.get('/users', userController.getAll.bind(userController));

userRoutes.get('/users/:userID', async (req: Request, res: Response) => {
    return await userController.getByID(req, res);
})

userRoutes.get('/users/email/:email', async (req: Request, res: Response) => {
    return await userController.getByEmail(req, res);
})

userRoutes.put('/users/:userID', async (req, res) => {
    return await userController.update(req, res);
});

userRoutes.delete('/users/:userID', async (req, res) => {
    return await userController.delete(req, res);
});


export { userRoutes };