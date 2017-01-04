import auth   from "j-toker";
import Cookie from "js-cookie";
import PubSub from "pubsub-js";

import globals from "./globals";

auth.persistData = function(key, val, config) {
  Cookie(key, JSON.stringify(val), {
    expires: this.getConfig(config).cookieExpiry,
    path:    this.getConfig(config).cookiePath,
    domain:  globals.cookieDomain
  });
};

auth.retrieveData = function(key) {
  var val = Cookie(key);

  try {
    return $.parseJSON(val);
  }

  catch (err) {
    return val && val.replace(/("|')/g, '');
  }
};

auth.deleteData = function(key) {
  Cookie.remove(key, {
    path:   this.getConfig().cookiePath,
    domain: globals.cookieDomain
  });
}

PubSub.subscribe(
  'z3k-shared.configured',
  () => auth.configure({ apiUrl: globals.authApiUrl })
);

export default auth;
