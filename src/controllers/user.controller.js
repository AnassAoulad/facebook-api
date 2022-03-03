import * as UserModel from "../models/User.model";

let date = new Date
// fonctionne
export const createUser = async (request, response) => {
  const { email, password } = request.body
  response
    .status(201)
    .json({
      data: {
        user: await UserModel.createUser({ id: '10', email: 'petert', password: 'peter', updatedAt: date, createdAt: date })
      }
    });
}

export const findAll = async (_request, response) => {
  response
    .status(200)
    .json({ users: await UserModel.findAll() })
}

export const findProfile = async (request, response) => {
  const { id } = request.params;

  response
    .status(200)
    .json({
      data: {
        profile: await UserModel.findProfile(Number(id))
      }
    })
}

// export const findOne = (request, response) => {
//   const { id } = request.params;

//   const article = ArticleModel.findOne(Number(id))
//   if (!article) throw new ErrorNotFound();

//   response
//     .status(200)
//     .json({ article });
// }

// export const updateOne = (request, response) => {
//   const { id } = request.params
//   const { title, content } = request.body;

//   const article = ArticleModel.updateOne({ id: Number(id), title, content });
//   if (!article) throw new ErrorNotFound();

//   response
//     .status(200)
//     .json({ article });
// }

// export const deleteOne = (request, response) => {
//   const { id } = request.params;

//   ArticleModel.deleteOne(Number(id));

//   response
//     .status(204)
//     .end();
// }
