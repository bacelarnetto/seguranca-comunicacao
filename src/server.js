import 'dotenv/config';//colocar antes de tudo
import express from 'express';
import eurekaHelper from './app/lib/eureka-helper'
import routes from './routes';
import middlewares from './config/middlewares.js'
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const PORT = process.env.SERVER_PORT;

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));


middlewares(app);
app.use(routes);
app.use('/admin/queues', BullBoard.UI);

app.listen(PORT, () => {
  console.log('Server running on localhost '+ PORT);
});

eurekaHelper.registerWithEureka('seguranca', PORT);