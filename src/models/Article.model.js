let articles = [
  {
    id: 1,
    title: 'Web Development',
    content: "Let's dive into REST API !",
  },
]

export const createOne = ({ title, content }) => {
  const article = {
    id: articles.length + 1,
    title,
    content,
  };
  articles.push(article);

  return article;
}

export const findAll = () => {
  return articles;
}

export const findOne = (id) => {
  const articles = findAll();

  return articles.find(
    (article) => article.id === id,
  );
}

export const updateOne = ({ id, title, content }) => {
  const articleIndex = articles.findIndex(
    (article) => article.id === id,
  );

  if (articleIndex < 0) return null;

  articles[articleIndex] = { id, title, content };
  return articles[articleIndex];
}

export const deleteOne = (id) => {
  articles = articles.filter(
    (article) => article.id !== id,
  );

  return true;
}
