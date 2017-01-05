import testInstance   from "./factory/base-model-factory";
import CustomModel from "./factory/custom-model-factory";
import { expect } from "chai";

import { config } from "./../src/globals";

describe('collection', function() {
  var customInstance = new CustomModel();
    before(function() {
      const testSections = [{id: 1, name: 'ChildObject1', orderIndex: 1}, {id: 2, name: 'ChildObject2', orderIndex: 2}, {id: 3, name: 'ChildObject3', orderIndex: 3}, {id: 4, name: 'ChildObject4', orderIndex: 4}];
      testSections.map((e) => (customInstance.sections.add(e)))
    })

    it('model should have property lengrh for elements in association', function() {
      expect(customInstance.sections.length).to.equal(4);
    });


    it('should remove element from collection', function() {
      const firstElement = customInstance.sections.first();
      customInstance.sections.remove(firstElement.uuid)
      expect(customInstance.sections.length).to.equal(3);
    });

    it('should add element to collection', function() {
      customInstance.sections.add({id: 5, name: 'ChildObject5', orderIndex: 5})
      expect(customInstance.sections.length).to.equal(4);
    });

    it('should moove elements in collection', function() {
      const firstElement = customInstance.sections.first();
      const lastElement = customInstance.sections.last();
      customInstance.sections.move(firstElement.uuid, lastElement.uuid)
      expect(customInstance.sections.last().uuid).to.equal(firstElement.uuid);
    });

    it('should be ordered', function() {
      expect(customInstance.sections.isOrdered).to.be.true;
    })
    
});
