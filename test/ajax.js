import { config } from "./../src/globals";
import ajax       from "./../src/ajax";

import $ from "jquery";

describe('ajax()', () => {

  it('throws exception if baseUrl is missing', () => {
    expect(ajax).to.throw(Error);
  });

  describe('return value', () => {

    before('set up ajaxBaseUrl', () => {
      config({ ajaxBaseUrl: 'http://google.com' });
    })

    it('returns a resolved promise on successul requests', (done) => {
      const stub = sinon.stub($, 'ajax').returns(Promise.resolve());
      ajax().then(done);
      stub.restore();
    });

    it('returns a rejected promise on unsuccessful requests', (done) => {
      const stub = sinon.stub($, 'ajax').returns(Promise.reject());
      ajax().catch(done);
      stub.restore();
    });

  });

  describe('arguments handling', () => {
    let stub;

    before('stub jQuery ajax', () => {
      config({ ajaxBaseUrl: 'http://google.com' });
      stub = sinon.stub($, 'ajax').returns(Promise.resolve());
    });

    after('restore jQuery ajax', () => {
      stub.restore();
    });

    it('uses ajaxBaseUrl if no url is provided', () => {
      ajax();
      expect(stub.lastCall.args[0].url).to.equal('http://google.com/');
    });

    it('handles url without a leading slash', () => {
      ajax({ url: 'foobar' });
      expect(stub.lastCall.args[0].url).to.equal('http://google.com/foobar');
    });

    it('handles url with a leading slash', () => {
      ajax({ url: '/foobar' });
      expect(stub.lastCall.args[0].url).to.equal('http://google.com/foobar');
    });

    it('uses GET if no method is provided', () => {
      ajax();
      expect(stub.lastCall.args[0].method).to.equal('GET');
    });

    it('forwards provided method to jQuery#ajax()', () => {
      ajax({ method: 'POST' });
      expect(stub.lastCall.args[0].method).to.equal('POST');
    });

    it('does not stringify payload for GET methods', () => {
      ajax({ payload: { foo: 'bar' } });
      expect(stub.lastCall.args[0].data).to.eql({ foo: 'bar' });
    });

    it('stringifies payload for other methods', () => {
      ajax({ payload: { foo: 'bar' }, method: 'POST' });
      expect(stub.lastCall.args[0].data).to.eql(JSON.stringify({ foo: 'bar' }));
    });

  });

});
