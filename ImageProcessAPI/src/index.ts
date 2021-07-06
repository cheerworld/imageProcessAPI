import express from 'express';
import routes from './routes/index';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());

app.use('/api', routes);

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Main route');
});

app.get('*', (req: express.Request, res: express.Response): void => {
  res.send(
    'Wrong route, please enter a valid route, such as: http://localhost:8000/api/images'
  );
});

app.listen(port, (): void => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
