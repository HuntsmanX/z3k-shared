import { action } from "mobx";
import { chunk, some } from "lodash";

import routerStore from "./router-store";

class SessionStore {

  constructor() {
    this.ifAllowed = this.ifAllowed.bind(this);
  }

  @action create() {
    this._checkCurrentUser();

    this.currentUser.signIn().then(
      () => routerStore.redirectAfterSignIn()
    );
  }

  @action destroy(navigate = true) {
    this._checkCurrentUser();

    this.currentUser.signOut().then(
      () => navigate && routerStore.navigateToSignIn()
    );
  }

  ifAllowed(...args) {
    this._checkCurrentUser();

    const ret = args.pop();
    const pairs = chunk(args, 2);

    const allowed = some(
      pairs.map(p => this.currentUser.allowed(p[0], p[1]))
    );

    return allowed ? ret : null;
  }

  _checkCurrentUser() {
    if (!this.currentUser)
      throw new Error('Session store must define this.currentUser in the constructor')
  }

}

export default SessionStore;
