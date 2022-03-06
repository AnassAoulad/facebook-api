import * as UserModel from "../models/User.model";

export const findProfile = async (request, response) => {
  const { id } = request.params
  console.log('findProfile')
  const profile = await UserModel.findProfile(id)
  response
    .status(200)
    .json(profile)
}

export const findAll = async (_request, response) => {
  console.log('findAll')
  const users = await UserModel.findAll()
  response
    .status(200)
    .json(users)
}

export const updateOne = async (request, response) => {
  const { id } = request.params
  console.log('update')
  const payload = request.body
  const profile = await UserModel.updateOne(id, payload.firstName, payload.lastName)

  response
    .status(200)
    .json({
      profile
    })
}

export const deleteOne = async (request, response) => {
  const { id } = request.params
  console.log('detele')
  const user = await UserModel.deleteOne(Number(id))
  response
    .status(200)
    .json(
      user
    )
}
