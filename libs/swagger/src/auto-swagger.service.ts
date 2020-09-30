import { EnvironmentService } from '@gm50x/environment';
import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class AutoSwaggerService {
  constructor(private readonly env: EnvironmentService) {}
  addSwagger(app: INestApplication, prefix: string = 'SWAGGER'): void {
    const options = new DocumentBuilder()
      .setTitle(this.env.get(`${prefix}_TITLE`) || 'Sample API')
      .setContact(
        this.env.get(`${prefix}_AUTHOR`) || '',
        this.env.get(`${prefix}_SITE`) || '',
        this.env.get(`${prefix}_EMAIL`) || '',
      )
      .setDescription(
        this.env.get(`${prefix}_DESCRIPTION`) ||
          'This is a sample API, use it as you like.',
      )
      .setExternalDoc(
        'Export Specs',
        `${this.env.get('URL') || 'http://localhost'}:${this.env.get(
          'PORT',
        )}/${this.env.get(`${prefix}_DOCS`) || 'api-docs'}-json`,
      )
      .setVersion(this.env.get(`${prefix}_VERSION`) || 'v1')
      .build();
    const docs = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(
      this.env.get(`${prefix}_DOCS`) || 'api-docs',
      app,
      docs,
    );
  }
}
