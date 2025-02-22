import 'reflect-metadata';
import * as path from 'path';
process.env['NODE_CONFIG_DIR'] = path.join(__dirname + '/../config');

import express, { } from 'express';
import { useExpressServer, getMetadataArgsStorage, useContainer } from 'routing-controllers';
import swaggerUi from 'swagger-ui-express';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import errorMiddleware from './middlewares/error.middleware';
import morgan from 'morgan';
import { stream } from './utils/logger';
import config from 'config';
import Container from 'typedi';
import { AutoMapperManager } from './mapper-profiles/mapper';

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(Controllers: Function[]) {
    this.app = express();
    this.port = process.env.PORT || 3200;
    console.log('Node Env : ' + process.env.NODE_ENV);

    useContainer(Container);
    new AutoMapperManager().setUpAutoMapper();
    this.initializeMiddlewares();
    this.initializeRoutes(Controllers);
    this.initializeSwagger(Controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(morgan(config.get('log.format'), { stream }));
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(controllers: Function[]) {
    useExpressServer(this.app, {
      cors: {
        origin: config.get('cors.origin'),
        credentials: config.get('cors.credentials'),
      },
      controllers: controllers,
      defaultErrorHandler: false,
    });
  }

  private initializeSwagger(controllers: Function[]) {
    const { defaultMetadataStorage } = require('class-transformer/cjs/storage');

    const schemas: any = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
      refPointerPrefix: '#/components/schemas/',
    });

    const routingControllersOptions = {
      controllers: controllers,
    };
    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(storage, routingControllersOptions, {
      components: {
        schemas,
        securitySchemes: {
          basicAuth: {
            scheme: 'basic',
            type: 'http',
          },
        },
      },
      info: {
        // description: 'Generated with `routing-controllers-openapi`',
        title: 'Sri Kanya APIs',
        version: '1.0.0',
      },
    });

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`server is running on PORT ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;

