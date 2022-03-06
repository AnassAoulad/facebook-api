import * as PostModel from "../models/Post.model";

export const createPostDto = async (request, response) => {
  const { authorId, message } = request.body
  const post = await PostModel.createPostDto({ message, authorId })
  console.log('createPost')
  response
    .status(201)
    .json(post);
}

export const findOne = async (request, response) => {
  const { id } = request.params
  console.log('findOne')
  response
    .status(200)
    .json({
      post: await PostModel.findOne(Number(id))
    })
}

export const findAll = async (_request, response) => {
  console.log('findAll')
  response
    .status(200)
    .json({
      posts: await PostModel.findAll()
    })
}

export const updatePostDto = async (request, response) => {
  const { id } = request.params
  const { message } = request.body
  console.log('Update')
  const post = await PostModel.updatePostDto({ id, message })
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
