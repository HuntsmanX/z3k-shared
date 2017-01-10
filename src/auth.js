import auth   from "j-toker";
import Cookie from "js-cookie";

import pubsub  from "./pubsub";
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
    return JSON.parse(val);
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

const configAuth = () => {
  auth.configure({
    apiUrl: globals.authApiUrl
  }).then(
    (user) => pubsub.publish('auth.initial.success', user),
    (err)  => pubsub.publish('auth.initial.error', err)
  );
}

pubsub.subscribe('shared.config.success', configAuth);

export default auth;
