import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
	let app: INestApplication, server: any;
	jest.setTimeout(300000);

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
		server = app.getHttpServer();
	});

	it('/hello (GET)', () => {
		request(server).get('/hello').expect(200).expect('Hello World!');
	});
});
