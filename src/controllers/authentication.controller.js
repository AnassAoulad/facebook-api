import jwt from 'jsonwebtoken';
import * as AuthenticationModel from "../models/Authentication.model";

export const login = async (request, response) => {
  const { email, password } = request.body

  const user = await AuthenticationModel.findByCredentials({ email, password }, { id: true, email: true });
  const token = jwt.sign({ id: user.id }, 'SECRET')
  response.json({ token, user })
}

export const registerDto = async (request, response) => {
  console.log('create user')
  const { email, password } = request.body
  const user = await AuthenticationModel.registerDto({ email, password })
  response
    .status(201)
    .json(user)
}
