import { Collection } from "../../dist/z3k-shared";
import CustomModel from "./custom-model-factory";

class CustomCollection extends Collection {

  static get model() {
    return CustomModel;
  }

  static get urlRoot() {
    return "/v1/forms/tests";
  }

}

export default CustomCollection;
