import express, { Request, Response } from "express";
import cors from 'cors';

import { calculateExample, calculateGet, calculatePost } from './src/controllers/IrpfController';

const app = express();
app.use( cors() );

app.get('/', (req: Request, res: Response) => {
	return res.send("Está funcional!");
});

app.get("/teste", (req, res) => res.send("Requisição (GET) de Teste ok!"));

app.get("/irpf/example", calculateExample);

app.get("/irpf/:value/:name", calculateGet);

//app.post('/irpf/:value/:name', calculatePost);
app.post('/irpf', calculatePost);

app.listen(3000, () => console.log("App rodando na porta 3000!"));