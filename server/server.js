import * as rootConfig from "./configs/root.config.js";
import * as dbConfig from './configs/db.config.js';
import { apiRouter } from './routes/api.routes.js';

const port =  process.env.PORT || 3001;
const app = rootConfig.app;

app.use('/', apiRouter)

app.all('*', (req,res) => {
  const filePath = rootConfig.filePath;
  res.sendFile(filePath);
})

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
