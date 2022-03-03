import { ErrorNotFound } from "../errors/NotFound.error";
import { ErrorBadRequest } from "../errors/BadRequest.error";
import * as ArticleModel from "../models/Article.model";

export const createOne = (request, response) => {
  const { title, content } = request.body;
  if (!title || !content) throw new ErrorBadRequest();

  const article = ArticleModel.createOne({
    title,
    content,
  });

  response
    .status(201)
    .json({ article });
}

export const findAll = (_request, response) => {
  response
    .status(200)
    .json({ articles: ArticleModel.findAll() })
}

export const findOne = (request, response) => {
  const { id } = request.params;

  const article = ArticleModel.findOne(Number(id))
  if (!article) throw new ErrorNotFound();
  
  response
    .status(200)
    .json({ article });
}

export const updateOne = (request, response) => {
  const { id } = request.params
  const { title, content } = request.body;

  const article = ArticleModel.updateOne({ id: Number(id), title, content });
  if (!article) throw new ErrorNotFound();

  response
    .status(200)
    .json({ article });
}

export const deleteOne = (request, response) => {
  const { id } = request.params;

  ArticleModel.deleteOne(Number(id));

  response
    .status(204)
    .end();
}
