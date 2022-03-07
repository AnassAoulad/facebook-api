import * as UserModel from "../models/User.model";

export const findPosts = async (request, response) => {
  const { id } = request.params
  const posts = await UserModel.findPosts(id)
  response
    .status(200)
    .json(posts)
}

export const findProfile = async (request, response) => {
  const { id } = request.params
  const profile = await UserModel.findProfile(id)
  response
    .status(200)
    .json(profile)
}

export const updateOne = async (request, response) => {
  const { id } = request.params
  const payload = request.body
  const profile = await UserModel.updateOne(id, payload.firstName, payload.lastName)

  response
    .status(200)
    .json(
      profile
    )
}

export const deleteOne = async (request, response) => {
  const { id } = request.params
  const user = await UserModel.deleteOne(Number(id))
  response
    .status(200)
    .json(
      user
    )
}
