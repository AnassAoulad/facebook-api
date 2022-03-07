import express from "express";
import routes from "./routes";
import { handleError } from "./middlewares/handleError.middleware";

export const launch = ({ protocol, port, host }) => {
  const application = express();

  application.use(express.json());

  application.use(routes);

  application.use(handleError);

  application.listen(
    port,
    () => console.log(`API ready at ${protocol}://${host}:${port}`),
  );
}
