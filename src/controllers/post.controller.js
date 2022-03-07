import jwt from 'jsonwebtoken';
import * as PostModel from "../models/Post.model";


export const createPostDto = async (request, response) => {
  const { authorization: token } = request.headers;
  const payload = jwt.verify(token.split(' ')[1], 'SECRET');
  const authorId = payload.id
  const { message } = request.body
  const post = await PostModel.createPostDto(authorId, message)
  response
    .status(201)
    .json(
      post
    )
}

export const findOne = async (request, response) => {
  const { id } = request.params
  const post = await PostModel.findOne(Number(id))
  response
    .status(200)
    .json(
      post
    )
}

export const findAll = async (_request, response) => {
  const posts = await PostModel.findAll()
  response
    .status(200)
    .json(
      posts
    )
}

export const updatePostDto = async (request, response) => {
  const { id } = request.params
  const { message } = request.body
  const post = await PostModel.updatePostDto(Number(id), message)
  response
    .status(200)
    .json(
      post
    )
}

export const deleteOne = async (request, response) => {
  const { id } = request.params
  const post = await PostModel.deleteOne(Number(id))
  response
    .status(204)
    .json(
      post
    )
}
