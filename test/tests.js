describe('mailto', function () {

  var assert = require('assert');
  var mailto = require('mailto');

  it('should have opened your email client', function () {
    mailto('ian@ianstormtaylor.com', {
      subject: 'The mailto component...',
      body: 'It works!'
    });
  });
});