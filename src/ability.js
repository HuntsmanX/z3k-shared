import { action, observable, computed } from "mobx";
import { isString, some, at, every } from "lodash";

class Ability {

  @observable permissions = [];

  constructor(conditionCheckers) {
    this.conditionCheckers = conditionCheckers;
  }

  @action setPermissions(permissions) {
    this.permissions.replace(permissions);
  }

  @action unsetPermissions() {
    this.permissions.clear();
  }

  allowed(resource, action) {
    return computed(
      () => some(
        this.permissions,
        this._checkPermission.bind(this, resource, action)
      )
    ).get();
  }

  _checkPermission(resource, action, permission) {
    const resourceKey = this._getResourceKey(resource);

    return permission.resource === resourceKey &&
      permission.action === action &&
      this._checkConditions(permission.conditions, resource, resourceKey);
  }

  _getResourceKey(resource) {
    if (isString(resource)) return resource;
    const key = resource.constructor.resourceKey;
    if (!key) throw `Resource key is not defined for ${resource.constructor.name}`;
    return key;
  }

  _checkConditions(conditions, resource, resourceKey) {
    if (isString(resource) || !Object.keys(conditions).length) return true;

    return every(
      Object.keys(conditions).map(conditionKey => {
        const checker = this._getConditionChecker(resourceKey, conditionKey);
        return checker(conditions[conditionKey], resource);
      })
    );
  }

  _getConditionChecker(resourceKey, conditionKey) {
    const path = [...resourceKey.split(':'), conditionKey].join('.');
    const checker = at(this.conditionCheckers, path)[0];
    if (!checker) throw `Condition checker is not defined for ${path}`;
    return checker;
  }

}

export default Ability;
