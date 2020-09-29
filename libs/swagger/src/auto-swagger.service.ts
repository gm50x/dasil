import { EnvironmentService } from '@gm50x/environment';
import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class AutoSwaggerService {
  constructor(private readonly env: EnvironmentService) {}
  addSwagger(app: INestApplication, prefix: string = 'APP'): void {
    const options = new DocumentBuilder()
      .setTitle(this.env.get(`${prefix}_TITLE`) || 'Sample API')
      .setContact('Getúlio Magela Silva', 'https://github.com/gm50x', '')
      .setDescription(
        this.env.get(`${prefix}_DESCRIPTION`) ||
          'This is a sample API, use it as you like.',
      )
      .setVersion(this.env.get(`${prefix}_VERSION`) || 'v1')
      .build();
    const docs = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(
      this.env.get(`${prefix}_DOCS`) || 'api-docs',
      app,
      docs,
      {
        explorer: true,
        swaggerUrl: 'http://localhost:3000/swagger.json',
      },
    );
  }
}
