import { Request, Response } from "express";
import irpf from "../irpf";

export function calculateExample(req:Request, res:Response){
  res.json(
    irpf.calculateExample()
  );
} 

export function calculateGet(req: Request, res: Response) {
  console.log(req.params);
  const value = Number(req.params.value);
  const name = req.params.name;

  res.status(200).json(
    irpf.calculateThis(value, name)
  );
}

export function calculatePost(req: Request, res: Response) {
  console.log(req.body); 

}
