import express, { Request, Response } from "express";
import cors from 'cors';

import IrpfController from './src/controllers/IrpfController';
import UserController from './src/controllers/UserController';
import ProductController from './src/controllers/ProductController';

const app = express();
app.use( cors() );
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	return res.send("Está funcional!");
});

app.get("/teste", (req, res) => res.send("Requisição (GET) de Teste ok!"));

app.get("/irpf/example", IrpfController.calculateExample);
app.get("/irpf/:value/:name", IrpfController.calculateGet);
app.post('/irpf', IrpfController.calculatePost);

app.post('/user/customer/add', UserController.signUp);
app.post('/user/login', UserController.signIn);

app.get('/product/list', ProductController.list);

app.listen(3005, () => console.log("App rodando na porta 3005!"));