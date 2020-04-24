import { Request, Response } from 'express';

class UserController {
  public signUp(req: Request, res: Response) {
    const { address, age, email, name, user:{password} } = req.body;

    // console.log(address);
    // console.log(age);
    // console.log(email);
    // console.log(name);
    // console.log(password);

    res.status(200).json({
      token:'25sd4sa56da1s'
    });

  }

  public signIn(req: Request, res: Response) {
    const {login, password} = req.body;
    
    // console.log(login);
    // console.log(password);

    res.status(200).json({
      token: '25sd4sa56da1s'
    });
  }
}

export default new UserController;