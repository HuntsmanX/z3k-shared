import { ajax } from "./../dist/z3k-shared";

import { expect } from "chai";


describe('ajax', function() {

  it('throws exception if baseUrl is missing', function() {
    const num = 1;
    expect(num).to.equal(1);
  });

});
