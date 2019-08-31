const fetch = require('node-fetch');
const { test } = require('light');

const index = require('../routes/index');

let server;
beforeAll(async () => {
  server = await test(index);
})
afterAll(async () => {
  server.close();
});

describe('index', () => {
  it('responds with JSON', async () => {
    expect.assertions(2);
    const req = await fetch(server.url);
    const res = await req.json();
    expect(req.status).toStrictEqual(200);
    expect(res).toMatchObject({
      hello: 'world',
      this: 'is being tested by jest',
    });
  });
});
