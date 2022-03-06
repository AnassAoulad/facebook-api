import { request, response } from 'express';
import jwt from 'jsonwebtoken';
import { HttpException, HttpStatus } from '../errors/HttpException.error';
import * as UserModel from '../models/user.model';

export const jwtMiddleware = async (request, response, next) => {
  const { authorization: token } = request.header
  try {
    const { id } = jwt.verify(token, secret);
    const user = await UserModel.findOne({ id });
    if (!user) {
      return next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
    }
    request.user = user;
    next();
  } catch (error) {
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  }
}
