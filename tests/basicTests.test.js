//jest and supertest additional dependencies added for testing

import request from 'supertest';
import app from '../server.js'; 


let token;

beforeAll((done) => {
  request(app)
    .post('/login')
    .send({
      email: 'user@example.com',
      password: 'securepassword',
    })
    .end((err, response) => {
      console.log(response.body);
      token = response.body.token; // save the token!
      if (!token) {
        throw new Error('Token not defined!');
      }
      done();
    });
});

describe('GET /clients', () => {
  it('responds with status 200', async () => {
    const response = await request(app)
    .get('/clients')
    .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /projects', () => {
  it('responds with status 200', async () => {
    const response = await request(app)
    .get('/projects')
    .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /sponsors', () => {
  it('responds with status 200', async () => {
    const response = await request(app)
    .get('/sponsors')
    .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /usuarios', () => {
  it('responds with status 200', async () => {
    const response = await request(app)
    .get('/usuarios')
    .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});

