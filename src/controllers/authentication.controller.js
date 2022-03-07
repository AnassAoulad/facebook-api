import jwt from 'jsonwebtoken';
import * as AuthenticationModel from "../models/Authentication.model";

export const login = async (request, response) => {
  const { email, password } = request.body

  const user = await AuthenticationModel.findByCredentials({ email, password }, { id: true, email: true });
  const token = jwt.sign({ id: user.id }, 'SECRET')
  response.status(200).json({ token, user })
}

export const registerDto = async (request, response) => {
  const { email, password } = request.body
  const user = await AuthenticationModel.registerDto({ email, password })
  response
    .status(201)
    .json(user)
}
