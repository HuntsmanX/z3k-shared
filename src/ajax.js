import $            from "jquery";
import { defaults } from "lodash";
import urljoin      from "url-join";

import globals from "./globals";

const ajax = (options = {}) => {
  defaults(options, {
    url:         '/',
    method:      'GET',
    dataType:    'json',
    contentType: 'application/json',
    headers:     { 'X-Key-Inflection' : 'camel' }
  });

  options.url  = urljoin(globals.ajaxBaseUrl, options.url);

  options.data = options.method === 'GET' ?
    options.payload :
    JSON.stringify(options.payload);

  const request = $.ajax(options);

  request.then(globals.ajaxHandleSuccess, globals.ajaxHandleError);

  return request;
}

export default ajax;
