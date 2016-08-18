var describe = require('./index').describe;
var it = require('./index').it;

describe('assert-report test block', () => {
  it('should pass this it block', assert => {
    assert(true)
  });
  it('should pass this one too', assert => {
    assert(true)
  });
  it('should fail this test', assert => {
    assert(false)
  });
  it('should fail this one too', assert => {
    assert(false)
  });
  it('should pass this one last', assert => {
    assert(true)
  })
})
