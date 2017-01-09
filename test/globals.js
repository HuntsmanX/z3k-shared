import globals, { config } from "./../src/globals";
import pubsub from "./../src/pubsub";

describe('Global State object', () => {

  it('publishes shared.config.success event', () => {
    const spy = sinon.spy();
    pubsub.subscribe('shared.config.success', spy);
    config();
    setTimeout(0, () => expect(spy.called).to.be.true);
  });

  it('throws exception if ajaxBaseUrl has not been set', () => {
    expect(() => globals.ajaxBaseUrl).to.throw(Error);
  });

  it('returns ajaxBaseUrl after config', () => {
    config({ ajaxBaseUrl: 'http://google.com' });
    expect(globals.ajaxBaseUrl).to.equal('http://google.com');
  });

  it('throws exception if cookieDomain has not been set', () => {
    expect(() => globals.cookieDomain).to.throw(Error);
  });

  it('returns cookieDomain after config', () => {
    config({ cookieDomain: 'google.com' });
    expect(globals.cookieDomain).to.equal('google.com');
  });

  it('throws exception if authApiUrl has not been set', () => {
    expect(() => globals.authApiUrl).to.throw(Error);
  });

  it('returns authApiUrl after config', () => {
    config({ authApiUrl: 'https://google.com/auth' });
    expect(globals.authApiUrl).to.equal('https://google.com/auth');
  });

});
