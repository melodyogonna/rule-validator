const supertest = require('supertest');
const app = require('../../src/main');
const { GTEData } = require('../dummy/data');

const VALIDATORURL = '/validate-rule';

it('should return relevant personal details', async function () {
  const request = await supertest(app).get('/');

  expect(request.status).toBe(200);
  expect(request.body).toHaveProperty('status', 'success');
  expect(request.body).toMatchSnapshot();
});

describe('Validate greater than rule', function () {
  test('Request fails on missing rule', async function () {
    const request = await supertest(app).post(VALIDATORURL).send();
    expect(request.status).toBe(400);
    expect(request.body.message).toBe('rule is required.');
  });

  test('Request fails missing field', async function () {
    const { rule } = GTEData();
    const request = await supertest(app).post(VALIDATORURL).send({ rule });
    expect(request.status).toBe(400);
    expect(request.body.message).toBe('field is required.');
  });

  test('validation passes with correct data', async function () {
    const { rule, data } = GTEData();
    const request = await supertest(app)
      .post(VALIDATORURL)
      .send({ rule, data });
    expect(request.status).toBe(200);
    expect(request.body.status).toBe('success');
  });

  test('validation fails with incorrect data', async function () {
    const { rule, data } = GTEData(false);
    const request = await supertest(app)
      .post(VALIDATORURL)
      .send({ rule, data });
    expect(request.status).toBe(400);
    expect(request.body.status).toBe('error');
  });
});
