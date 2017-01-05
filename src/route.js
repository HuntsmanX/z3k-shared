import { Route as MobxRoute } from "mobx-router";

class Route extends MobxRoute {

  constructor(...args) {
    super(...args);

    this.onEnter     = this.onEnter     || this.emptyFunc;
    this.onExit      = this.onExit      || this.emptyFunc;
    this.beforeEnter = this.beforeEnter || this.emptyFunc;
    this.beforeExit  = this.beforeExit  || this.emptyFunc;
  }

  emptyFunc() {
    return true;
  }

}

export default Route;
