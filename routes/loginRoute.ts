import { Request, Response } from 'express';
import { Login } from '../services/login';
const express = require("express")
const router = express.Router();
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
      const { name,password} = req.body as { name:string,password:string};
      const user = new Login (name , password)
      const results = await user.setLogin()
      res.status(200).send("Login Success")
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports = router;