import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  describe('Test main endpoint /api responses', () => {
    it('gets the /api endpoint', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    });
  });

  describe('Test the /api/images endpoint', () => {
    it('gets the api/images endpoint', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toEqual(200);
    });
  });

  describe('Test a wrong endpoint', () => {
    it('send message to browser for endpoint "/api/404"', async () => {
      const response = await request.get('/api/404');
      expect(response).withContext(
        'Wrong route, please enter a valid route, such as: http://localhost:8000/api/images'
      );
    });
  });
});
