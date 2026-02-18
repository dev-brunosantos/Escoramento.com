import type { Request, Response } from "express";
declare class UserController {
    create(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getByID(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getByEmail(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { UserController };
//# sourceMappingURL=UserController.d.ts.map