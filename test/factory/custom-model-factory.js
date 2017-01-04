import { action } from "mobx";
import { Model } from "../../dist/z3k-shared";

class CustomModel extends Model {

  static get urlRoot() {
    return "/v1/forms/tests";
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
      () => {this.set('name', 'SAVEDTEST')}
    );
  }

}

const customInstance = new CustomModel();

export default customInstance;
