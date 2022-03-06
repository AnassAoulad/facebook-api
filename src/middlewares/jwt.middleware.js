import jwt from 'jsonwebtoken';
// import { HttpException, HttpStatus } from '../errors/HttpException.error';
import * as UserModel from '../models/user.model';

// const jwtMiddleware = async (request, response, next) => {

//   const { authorization: token } = request.header

//   try {
//     const { id } = jwt.verify(token, secret);
//     const user = await UserModel.findProfile({ id });
//     if (!user) {
//       return console.log('Unauthorized')
//     }
//     request.user = user;
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

const verify = (request, response, next) => {

  const { id } = request.params
  console.log(request.params)
  const { authorization: token } = request.headers;

  try {
    const payload = jwt.verify(token.split(' ')[1], 'SECRET');
    request.user = payload;

    // if (request.method !== 'GET' || request.method !== 'POST') {
    //   if (id != payload.id) {
    //     response.status(401).send("Wrong user");
    //     console.log(payload.id)
    //     console.log(request.params)
    //   }
    // }
    // console.log(request)
    next()
  }
  catch (error) {
    response.status(401).json({
      error: {
        code: 'E010',
        message: 'Unauthorized',
      },
    });
  }
}

// const verify = (request, response, next) => {

//   const { id } = request.params
//   const { authorization: token } = request.headers;

//   const formattedToken = token.split(' ')[1];;

//   jwt.verify(formattedToken, 'SECRET', async (err) => {

//     if (err) {
//       response.status(401).send("not authorized")
//     }

//     else {
//       const decoded = jwt.decode(formattedToken)

//       if (id === decoded.id) {
//         next()
//       }
//       else {
//         response.status(401).send("Wrong user");
//       }
//     }
//   })
// }

export default verify
