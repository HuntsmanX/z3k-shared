import pubsub from "./pubsub";

class GlobalState {

  config(options = {}) {
    Object.keys(options).forEach(
      key => this[`_${key}`] = options[key]
    );
    pubsub.publish('shared.config.success');
  }

  // Used by ajax to construct urls

  _ajaxBaseUrl = null;

  get ajaxBaseUrl() {
    if (!this._ajaxBaseUrl) this.throwError('ajaxBaseUrl');

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
    if (!this._cookieDomain) this.throwError('cookieDomain');

    return this._cookieDomain;
  }

  // Used by j-toker for server authentication

  _authApiUrl = null;

  get authApiUrl() {
    if (!this._authApiUrl) this.throwError('authApiUrl');

    return this._authApiUrl;
  }

  throwError(attr) {
    throw new Error(`${attr} has not been set. Use config function from the 'z3k-shared' package to set ${attr}`);
  }

}

const globals = new GlobalState();

const config = globals.config.bind(globals);

export default globals;
export { config };
