'use strict';

describe('Service: url', function () {

  // load the service's module
  beforeEach(module('troomlyApp'));

  // instantiate service
  var url;
  beforeEach(inject(function (_url_) {
    url = _url_;
  }));

  /* ----- test with Jasmine ------ */

  it('should pass http://www.google.com', function () {
    expect(url.isValid('http://www.google.com')).toBe(true);
  });

  it('should pass www.google.com', function () {
    expect(url.isValid('www.google.com')).toBe(true);
  });

  it('should pass google.com', function () {
    expect(url.isValid('google.com')).toBe(true);
  });

  it('should fail htp://www.google.com', function () {
    expect(url.isValid('htp://www.google.com')).toBe(false);
  });

  it('should fail http:/www.google.com', function () {
    expect(url.isValid('http:/www.google.com')).toBe(false);
  });

  it('should fail ww.google.com', function () {
    expect(url.isValid('ww.google.com')).toBe(false);
  });

  it('should pass https://creativemarket.com/pixel-buddha/34811-Flat-icons-bundle-%28510-icons%29', function () {
    expect(url.isValid('https://creativemarket.com/pixel-buddha/34811-Flat-icons-bundle-%28510-icons%29')).toBe(true);
  });

  it('should pass http://www.growtainers.com/?page_id=7511', function () {
    expect(url.isValid('http://www.growtainers.com/?page_id=7511')).toBe(true);
  });

});
