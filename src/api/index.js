import { Router } from 'express';
import bookRouter from'./book';
import authorRouter from './author'

const apiRouter = new Router();
//роутер ./book
apiRouter.use('/book', bookRouter);
apiRouter.use('/author', authorRouter);

export default apiRouter;