import jwt from 'jsonwebtoken'

const verify = (request, response, next) => {

  const { authorization: token } = request.headers;

  try {
    const payload = jwt.verify(token.split(' ')[1], 'SECRET');
    request.user = payload;
    next()
  }
  catch (error) {
    console.log(error)
    response.status(401).json({
      error: {
        code: 'E010',
        message: 'Unauthorized',
      },
    });
  }
}

export default verify
