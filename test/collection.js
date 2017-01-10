import testInstance   from "./factory/model-factory";
import CustomModel from "./factory/custom-model-factory";

import { config } from "./../src/globals";

describe('Collection', () => {

  describe('#constructor()', () => {
    before(() => {
      const customAjax = (options) => {
        let ret = {};
        if(options.method == 'GET') {
          ret = Object.assign({}, options.payload, {sections: [{id: 1, name: 'ChildObject1', orderIndex: 1}, {id: 2, name: 'ChildObject2', orderIndex: 2}]});
        }
        return Promise.resolve({ data: ret });
      }

      config({
        ajax: customAjax
      });
    });

    describe('should initialize with custom attrs', () => {
      let customInstance = new CustomModel();
        before(() => {
          const testSections = [{id: 1, name: 'ChildObject1', orderIndex: 1}, {id: 2, name: 'ChildObject2', orderIndex: 2}, {id: 3, name: 'ChildObject3', orderIndex: 3}, {id: 4, name: 'ChildObject4', orderIndex: 4}];
          testSections.map((e) => (customInstance.sections.add(e)))
        });

        it('model should have property lengrh for elements in association', () => {
          expect(customInstance.sections.length).to.equal(4);
        });
      });

      describe('actions with elemetns in collection', () => {
        let customInstance = new CustomModel();
          before(() => {
            const testSections = [{id: 1, name: 'ChildObject1', orderIndex: 1}, {id: 2, name: 'ChildObject2', orderIndex: 2}, {id: 3, name: 'ChildObject3', orderIndex: 3}, {id: 4, name: 'ChildObject4', orderIndex: 4}];
            testSections.map((e) => (customInstance.sections.add(e)))
          });

        it('#remove()', () => {
          const firstElement = customInstance.sections.first();
          customInstance.sections.remove(firstElement.uuid);
          expect(customInstance.sections.length).to.equal(3);
        });

        it('#add()', () => {
          customInstance.sections.add({id: 5, name: 'ChildObject5', orderIndex: 5});
          expect(customInstance.sections.length).to.equal(4);
        });

        it('#add({})', () => {
          customInstance.sections.add();
          expect(customInstance.sections.length).to.equal(5);
        });

        it('#move()', () => {
          const firstElement = customInstance.sections.first();
          const lastElement  = customInstance.sections.last();
          customInstance.sections.move(firstElement.uuid, lastElement.uuid);
          expect(customInstance.sections.last().uuid).to.equal(firstElement.uuid);
        });

        it('#set()', () => {
          customInstance.sections.first().set('name', 'ChangedName');
          expect(customInstance.sections.first().name).to.equal('ChangedName');
        });
      });

      describe('should set attributes for elemetns in collection', () => {
        let customInstance = new CustomModel();
          before(() => {
            const testSections = [{id: 1, name: 'ChildObject1', orderIndex: 1}, {id: 2, name: 'ChildObject2', orderIndex: 2}, {id: 3, name: 'ChildObject3', orderIndex: 3}, {id: 4, name: 'ChildObject4', orderIndex: 4}];
            testSections.map((e) => (customInstance.sections.add(e)));
            customInstance.sections.set('currentPage', 2);
            customInstance.sections.set('totalItems', 5);
            customInstance.sections.set('totalPages', 3);
          });

          it('should be ordered', () => {
            expect(customInstance.sections.isOrdered).to.be.true;
          });

          it('should be paginated with custom params', () => {
            customInstance.sections._setPagination({totalPages: 10, totalItems: 50, currentPage: 4})
            expect(customInstance.sections.totalPages).to.equal(10);
            expect(customInstance.sections.totalItems).to.equal(50);
            expect(customInstance.sections.currentPage).to.equal(4);
          });

          it('should have property parent', () => {
            expect(customInstance.sections).to.have.property('parent');
          });

          it('should have correct URLs', () => {
            expect(customInstance.sections.getUrl('fetch')).to.equal(customInstance.sections.constructor.urlRoot);
            expect(customInstance.sections.getUrl('reorder')).to.equal(`${customInstance.sections.constructor.urlRoot}/reorder`);
          });

          it('should set markForDestruction', () => {
            const uuid = customInstance.sections.first().uuid;
            customInstance.sections.markForDestruction(uuid);
            expect(customInstance.sections.first()._destroy).to.be.true;
          });

      });

      describe('clear elements in assosiations', () => {
        let customInstance = new CustomModel();
          before(() => {
            const testSections = [{id: 1, name: 'ChildObject1', orderIndex: 1}, {id: 2, name: 'ChildObject2', orderIndex: 2}, {id: 3, name: 'ChildObject3', orderIndex: 3}, {id: 4, name: 'ChildObject4', orderIndex: 4}];
            testSections.map((e) => (customInstance.sections.add(e)))
          });

        it('should have no elements in collection after clear', () => {
          customInstance.sections.clear();
          expect(customInstance.sections.length).to.equal(0);
        });

        it('should have elements after fetch', () => {
          customInstance.sections.fetch().then(() => {
            expect(customInstance.sections.length).to.equal(2);
            done();
          });
        });
      });
  });
});
