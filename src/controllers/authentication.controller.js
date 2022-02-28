import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const LoginDto = async (req, res) => {
    const user = await UserModel.findByCredentials(req.body);
    if (!user) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const token = jwt.sign({ id: user.id }, 'SECRET');
    res.json({
        data: {
            token,
            user,
        },
    });
}

export const RegisterDto = async ({ body }, res) => {
    const { email, password} = body;
    const user = await UserModel.createOne({
        email,
        password,
    });

    res
      .status(201)
      .json({ data: { user } });
}