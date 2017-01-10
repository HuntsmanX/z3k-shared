import baseModel   from "./factory/model-factory";
import CustomModel from "./factory/custom-model-factory";

import { config } from "./../src/globals";

describe('Model', () => {

  describe('#constructor()', () => {

    describe('should initialize with default attrs', () => {

      it('should have property uuid', () => {
        expect(baseModel).to.have.property('uuid');
      });

      it('shoud have no changes after call methods with empty params', () => {
        baseModel.setAttributes();
        baseModel.fromJSON();
        baseModel.setAssociations();
        expect(baseModel.isBeingSaved).to.be.false;
        expect(baseModel.isBeingDestroyed).to.be.false;
        expect(baseModel.isNew).to.be.true;
        expect(baseModel.isBeingFetched).to.be.false;
        expect(baseModel).to.have.property('errors');
      });
    });

    it('should set new attrs', () => {
      baseModel.set('name', 'NewTestName');
      expect(baseModel.name).to.equal('NewTestName');
    });

    describe('should initialize with custom attrs', () => {
      const customInstance = new CustomModel({name: 'CustomModel'});

        it('should have property name for custom instance', () => {
          expect(customInstance).to.have.property('name');
          expect(customInstance.name).to.equal('CustomModel');
        });
      });
    });

  describe('#getUrlAndMethod()', () => {
    const customInstance = new CustomModel()
    expect(customInstance.getUrlAndMethod('create')).to.have.deep.property('[1]', 'POST');
    expect(customInstance.getUrlAndMethod('fetch')).to.have.deep.property('[1]', 'GET');
    expect(customInstance.getUrlAndMethod('update')).to.have.deep.property('[1]', 'PATCH');
    expect(customInstance.getUrlAndMethod('destroy')).to.have.deep.property('[1]', 'DELETE');
  });

  describe('#save()', () => {
    before(() => {
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
    });

    var customInstance = new CustomModel();

    it('should have name, id and sections (asMap) after save', (done) => {
      customInstance.set('name', 'SavedCustomModel');
      customInstance.save().then(() => {
        expect(customInstance.name).to.equal('SavedCustomModel');
        expect(customInstance.get('id')).to.equal(123);
        expect(customInstance.sections.first().name).to.equal('ChildComponentt1');
        done();
      });
    });

    it('should fetch all associations', (done) => {
      const customInstance = new CustomModel({name: 'FetchingTest'});
      customInstance.fetch().then(() => {
        expect(customInstance.associations).to.have.property('sections');
        done();
      });
    });

    it('it should have new attrs', (done) => {
      const customInstance = new CustomModel({name: 'BeforeUpdatedTest', id: 155});
      customInstance.save().then(() => {
        expect(customInstance.name).to.equal('UpdatedModel');
        done();
      });
    });
  });

  describe('#destroy() and #clear()', () => {
    const customInstance = new CustomModel();

    it('#markForDestruction()', () => {
      customInstance.markForDestruction();
      expect(customInstance._destroy).to.be.true;
    });

    it('it should have property isBeingDestroyed (true)', (done) => {
     const customInstance = new CustomModel({name: 'FetchingTest'});
      customInstance.destroy().then(() => {
        expect(customInstance.isBeingDestroyed).to.be.true;
        done();
      });
    });

    it('should not have property name after clear', () => {
      customInstance.clear();
      expect(customInstance.name).to.be.empty;
    });
  });

  describe('#serialize()', () => {
    const customInstance = new CustomModel();
    it('should serialize assosiations', () => {
      const testSection = {id: 125, name: 'FetchingTest'};
      customInstance.sections.add(testSection);
      customInstance.serialize({include: 'sections'});
      expect(customInstance.sections.first().name).to.equal('FetchingTest');
    });
  });

  describe('custom errors', () => {
    before(() => {
      const customAjax = (options) => {
        return Promise.reject({ status: 422, responseJSON: { name: ['errors'] } });
      }

      config({
        ajax: customAjax
      });

    });

    it('it should have errors', (done) => {
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
