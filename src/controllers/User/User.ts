import { Request, Response } from 'express';
import { DefaultController } from '../DefaultController';

export class UserController extends DefaultController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'POST /user request received' });
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'GET /user request received' });
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'PATCH /user request received' });
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'DELETE /user request received' });
    }
}