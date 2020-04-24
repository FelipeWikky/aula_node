import { Request, Response } from "express";
import irpf from "../irpf";

class IrpfController {
  public calculateExample(req: Request, res: Response) {
    res.json(
      irpf.calculateExample()
    );
  }

  public calculateGet(req: Request, res: Response) {
    //console.log(req.params);
    const value = Number(req.params.value);
    const name = req.params.name;

    res.status(200).json(
      irpf.calculateThis(value, name)
    );
  }

  calculatePost(req: Request, res: Response) {
    const { name, gain: value } = req.body;

    res.status(200).json(
      irpf.calculateThis(value, name)
    );
  }
}

export default new IrpfController();