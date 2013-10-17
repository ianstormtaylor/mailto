
var stringify = require('querystring').stringify;


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
  window.location = 'mailto:' + email + '?' + stringify(options || {});
}