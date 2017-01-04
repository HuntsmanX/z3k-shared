import testInstance   from "./factory/base-model-factory";
import customInstance from "./factory/custom-model-factory";
import { expect } from "chai";
import  sinon  from "sinon";

import { config } from "./../dist/z3k-shared";

const customAjax = (options) => {
  return Promise.resolve(options);
}

config({
  ajax: customAjax
});


describe('model', function() {

  describe('base class', function() {

    it('should have property uuid for every instance', function() {
      expect(testInstance).to.have.property('uuid');
    });

    it('should have property errors for every instance', function() {
      expect(testInstance).to.have.property('errors');
    })

    it('should have property attrs for every instance', function() {
      expect(testInstance).to.have.property('attrs');
    })

    it('should return true for not persisted instance', function() {
      expect(testInstance.isNew).to.be.true;
    })

    it('should return false for not persisted instance', function() {
      expect(testInstance.isPersisted).to.be.false;
    })

    it('should return false for default attributes (isBeingFetched)', function() {
      expect(testInstance.isBeingFetched).to.be.false;
    })

    it('should return false for default attributes (isBeingDestroyed)', function() {
      expect(testInstance.isBeingDestroyed).to.be.false;
    })

    it('should return false for default attributes (isBeingSaved)', function() {
      expect(testInstance.isBeingSaved).to.be.false;
    })
  });

  describe('custom class', function() {

    it('should have property name for custom instance', function() {
      expect(customInstance).to.have.property('name');
    });

    it('should have http method POST for create', function() {
      expect(customInstance.getUrlAndMethod('create')).to.have.deep.property('[1]', 'POST');
    });

    it('should have http method GET for fetch', function() {
      expect(customInstance.getUrlAndMethod('fetch')).to.have.deep.property('[1]', 'GET');
    });

    it('should have http method PATCH for update', function() {
      expect(customInstance.getUrlAndMethod('update')).to.have.deep.property('[1]', 'PATCH');
    });

    it('should have http method DELETE for update', function() {
      expect(customInstance.getUrlAndMethod('destroy')).to.have.deep.property('[1]', 'DELETE');
    });

    it('should have new property name', function() {
      customInstance.set('name', 'NewTestName');
      expect(customInstance.name).to.equal('NewTestName');
    })

    //it('should not have property name after clear', function(done) {
    //  customInstance.set('name', 'SavedTest');
    //  customInstance.save().then(
    //    () => {
    //      expect(customInstance.name).to.be('x');
    //      done();
    //    }
    //  );
    //})

    it('should not have property name after clear', function() {
      customInstance.clear();
      expect(customInstance.name).to.be.empty;
    })

  });

});
