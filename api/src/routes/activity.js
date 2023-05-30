const request = require('supertest');
const app = require('../app');
const Activity = require('../db/models/activity');
const Country = require('../db/models/country');

describe('Activities API', () => {
  beforeAll(async () => {
    await Activity.destroy({ truncate: true });
    await Country.destroy({ truncate: true });
  });

  afterAll(async () => {
    await Activity.destroy({ truncate: true });
    await Country.destroy({ truncate: true });
  });

  describe('GET /activities', () => {
    it('should return all activities', async () => {
      const activity1 = await Activity.create({ name: 'Activity 1' });
      const activity2 = await Activity.create({ name: 'Activity 2' });

      const response = await request(app).get('/activities');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          id: activity1.id,
          name: 'Activity 1',
          country: null,
        },
        {
          id: activity2.id,
          name: 'Activity 2',
          country: null,
        },
      ]);
    });

    it('should return an empty array if no activities are found', async () => {
      const response = await request(app).get('/activities');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('POST /activities', () => {
    it('should create a new activity', async () => {
      const country = await Country.create({ name: 'Country 1' });
      const response = await request(app)
       .post('/activities')
       .send({ name: 'Activity 1', countryId: country.id });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        status: 'Se ha creado exitosamente',
      });

      const activity = await Activity.findOne({ where: { name: 'Activity 1' } });
      expect(activity).not.toBeNull();
      expect(activity.countryId).toBe(country.id);
    });

    it('should return an error if the request body is invalid', async () => {
      const response = await request(app).post('/activities');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: 'error en la creacion',
      });
    });
  });
});