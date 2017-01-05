import { action, computed, observable } from "mobx";

import Model   from "./model";
import pubsub  from "./pubsub";
import auth    from "./auth";
import Ability from "./ability";

class User extends Model {

  @observable ability    = new Ability(this.conditionCheckers);
  @observable isSignedIn = false;

  initialize() {
    pubsub.subscribe('auth.validation.success', (e, data) => this._fromAuth(data));
    pubsub.subscribe('auth.signOut.success',    (e, data) => this._clearAttrs());
  }

  allowed(...args) {
    return computed(
      () => this.ability.allowed(...args)
    ).get();
  }

  // Example conditionCheckers:
  //
  // {
  //   forms: {
  //     test: {
  //       has_alerts: (value, resource) => {
  //         if (value === 'all') return true;
  //         if (value === 'yes') return resource.alerts.length > 0;
  //       }
  //     }
  //   }
  // }

  get conditionCheckers() {
    return {};
  }

  @action signIn() {
    this.set('isBeingSaved', true);
    this.unsetErrors();

    const request = auth.emailSignIn({
      email:    this.email,
      password: this.password
    });

    request.then(
      () => {
        this.set('isBeingSaved', false);
      },
      ({ reason }) => {
        this.set('isBeingSaved', false);
        this.setErrors({ email: [reason], password: [reason] });
      }
    );

    return request;
  }

  @action signOut() {
    if (!this.isSignedIn) return Promise.resolve();
    return auth.signOut();
  }

  @action _fromAuth(data) {
    this.isSignedIn = true;
    this.ability.setPermissions(data.permissions);

    this.fromAuth && this.fromAuth(data);
  }

  @action _clearAttrs() {
    this.isSignedIn = false;
    this.ability.unsetPermissions();

    this.clearAttrs && this.clearAttrs();
  }

}

export default User;
