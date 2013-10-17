
var querystring = require('querystring');


/**
 * Expose `mailto`.
 */

module.exports = mailto;


/**
 * Draft a new message to an `email` address with `options`.
 *
 * @param {String} email
 * @param {String} options (optional)
 *   @property {String} subject
 *   @property {String} body
 */

function mailto (email, options) {
  var url = 'mailto:' + email;
  if (options) url += '?' + querystring.stringify(options);
  window.location = url;
}