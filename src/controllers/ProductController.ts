import { Request, Response } from 'express';

class ProductController {
  public list(req: Request, res: Response) {
    const products = [
      { id: 1, name: 'Feijao', price: 10.54 },
      { id: 2, name: 'Arroz', price: 4.54 },
      { id: 3, name: 'Macarrão', price: 3.50 },
      { id: 4, name: 'Batata', price: 4.50 },
      { id: 5, name: 'Amendoim', price: 4.50 },
      { id: 6, name: 'Calabresa', price: 4.50 },
      { id: 7, name: 'Açucar', price: 4.50 },
      { id: 8, name: 'Café', price: 4.50 },
      { id: 9, name: 'Pão', price: 4.50 },
      { id: 10, name: 'Abacate', price: 4.50 },
    ];

    res.status(200).json(
      products
    );
  }
}

export default new ProductController;