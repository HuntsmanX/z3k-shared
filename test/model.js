import testInstance   from "./factory/base-model-factory";
import CustomModel from "./factory/custom-model-factory";
import { expect } from "chai";

import { config } from "./../src/globals";

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
    before(function() {
      const customAjax = (options) => {
        let ret = {};
        if(options.method == 'POST') {
          ret = Object.assign({}, options.payload, { id: 123, sections: [{name: 'ChildComponentt1'}, {name: 'ChildComponentt1'}] });
        } else if(options.method == 'GET') {
          ret = Object.assign({}, options.payload, {sections: [{name: 'ChildComponentt1'}, {name: 'ChildComponentt1'}] });
        } else if (options.method == 'PATCH') {
          ret = Object.assign({}, options.payload, {name: 'UpdatedModel'});
        } else {
          ret = {};
        }
        return Promise.resolve({ data: ret });
      }

      config({
        ajax: customAjax
      });
    })

    const customInstance = new CustomModel();

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

    it('should have new name, id and sections (asMap) after save', function(done) {
      customInstance.set('name', 'SavedCustomModel');
      customInstance.save().then(function() {
        expect(customInstance.name).to.equal('SavedCustomModel');
        expect(customInstance.get('id')).to.equal(123);
        expect(customInstance.sections.first().name).to.equal('ChildComponentt1');
        done();
      });
    })

    it('test fetch', function(done) {
      const customInstance = new CustomModel({name: 'FetchingTest'});
      customInstance.fetch().then(function () {
        expect(customInstance.associations).to.have.property('sections');
        done();
      })
    })

    it('it should have associations after fetch', function(done) {
      const customInstance = new CustomModel({name: 'FetchingTest'});
      customInstance.fetch().then(function () {
        expect(customInstance.associations).to.have.property('sections');
        done();
      })
    })

    it('it should have property isBeingDestroyed (true)', function(done) {
      const customInstance = new CustomModel({name: 'FetchingTest'});
      customInstance.destroy().then(function () {
        expect(customInstance.isBeingDestroyed).to.be.true;
        done();
      })
    })

    it('it should have new attrs', function(done) {
      const customInstance = new CustomModel({name: 'BeforeUpdatedTest', id: 155});
      customInstance.save().then(function () {
        expect(customInstance.name).to.equal('UpdatedModel');
        done();
      })
    })

    it('should not have property name after clear', function() {
      customInstance.clear();
      expect(customInstance.name).to.be.empty;
    })

    it('should serialize assosiations', function() {
      const testSection = {id: 125, name: 'FetchingTest'};
      customInstance.sections.add(testSection)
      customInstance.serialize({include: 'sections'})
      expect(customInstance.sections.first().name).to.equal('FetchingTest');
    })
  });

  describe('custom errors', function() {
    before(function() {
      const customAjax = (options) => {
        return Promise.reject({ status: 422, responseJSON: { name: ['errors'] } });
      }

      config({
        ajax: customAjax
      });

    });

    it('it should have errors', function(done) {
      const customInstance = new CustomModel({id: null, name: ''});
      customInstance.save().catch(
        () => {
          expect(customInstance.error('name')[0]).to.equal('errors');
          done();
        }
      );
    });

  });

});
