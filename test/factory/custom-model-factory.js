import { action, observable } from "mobx";
import Model from "../../src/model";
import CustomCollection from "./collection-factory";

class CustomModel extends Model {

  static get urlRoot() {
    return "/v1/forms/tests";
  }

  static get associations() {
    return {
      sections: { collection: CustomCollection, parentKey: 'test' }
    };
  }

  static get defaults() {
    return {
      name:             "",
      alerts:           [],
      successCriterion: 0,
      isBeingEdited:    false
    }
  }

  @action save() {
    return super.save().then(
      () => this.set('isBeingEdited', false)
    );
  }

  @action list() {
    this.collection.fetch();
  }

}

export default CustomModel;
