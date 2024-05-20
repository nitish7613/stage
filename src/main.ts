import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const bodyParser = require('body-parser')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
  await app.listen(process.env.PORT);
  console.log("Server is running on ", process.env.PORT)
}
bootstrap();
