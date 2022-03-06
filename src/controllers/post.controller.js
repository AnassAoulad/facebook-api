import * as PostModel from "../models/Post.model";

export const createPostDto = async (request, response) => {
  const { authorId, message } = request.body
  console.log("create post")
  const post = await PostModel.createPostDto(authorId, message)
  response
    .status(201)
    .json(
      post
    )
}

export const findOne = async (request, response) => {
  const { id } = request.params
  console.log(id)
  console.log('findOne')
  const post = await PostModel.findOne(Number(id))
  response
    .status(200)
    .json(
      post
    )
}

export const findAll = async (_request, response) => {
  console.log('findAll')
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
  console.log('Update')
  const post = await PostModel.updatePostDto(Number(id), message)
  response
    .status(200)
    .json(
      post
    )
}

export const deleteOne = async (request, response) => {
  const { id } = request.params
  console.log('Delete')
  const post = await PostModel.deleteOne(Number(id))
  response
    .status(204)
    .json(
      post
    )
}
