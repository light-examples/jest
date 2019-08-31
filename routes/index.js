const { light, Route } = require('light');

class Index extends Route {
  async handler() {
    return {
      hello: 'world',
      this: 'is being tested by jest',
    };
  }
}

module.exports = light(Index);
