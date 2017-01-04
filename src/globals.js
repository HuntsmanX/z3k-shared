import PubSub from "pubsub-js";

class GlobalState {

  config(options = {}) {
    Object.keys(options).forEach(
      key => this[`_${key}`] = options[key]
    );
    
    PubSub.publish('z3k-shared.configured');
  }

  // Used by ajax to construct urls

  _ajaxBaseUrl = null;

  get ajaxBaseUrl() {
    if (!this._ajaxBaseUrl) this.invariant('ajaxBaseUrl');

    return this._ajaxBaseUrl;
  }

  // Called by ajax upon successful requests

  _ajaxHandleSuccess = (data, textStatus, jqXHR) => {};

  get ajaxHandleSuccess() {
    return this._ajaxHandleSuccess;
  }

  // Called by ajax upon failed requests

  _ajaxHandleError = (jqXHR, textStatus, errorThrown) => {};

  get ajaxHandleError() {
    return this._ajaxHandleError;
  }

  // Used by Model and Collection classes to make XHR requests.
  // If not set, default ajax module will be used.

  _ajax = null;

  get ajax() {
    return this._ajax;
  }

  // Used by auth to write cookies

  _cookieDomain = null;

  get cookieDomain() {
    if (!this._ajaxBaseUrl) this.invariant('cookieDomain');

    return this._cookieDomain;
  }

  // Used by j-toker for server authentication

  _authApiUrl = null;

  get authApiUrl() {
    if (!this._authApiUrl) this.invariant('authApiUrl');

    return this._authApiUrl;
  }

  invariant(attr) {
    throw new Error(`${attr} has not been set. Use config function from the 'z3k-shared' package to set ${attr}`);
  }

}

const globals = new GlobalState();

const config = globals.config.bind(globals);

export default globals;
export { config };
