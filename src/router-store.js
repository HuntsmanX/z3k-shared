import { action, toJS, observable, computed } from "mobx";

import pubsub      from "./pubsub";
import startRouter from "./router-store/start-router";
import Route       from "./router-store/route";

class RouterStore {

  @observable params = {};
  @observable queryParams = {};
  @observable currentView;

  constructor() {
    this.goTo = this.goTo.bind(this);
  }

  @computed get currentPath() {
    return this.currentView ? this.currentView.replaceUrlParams(this.params, this.queryParams) : '';
  }

  @action start(stores, routes, options) {
    this.stores = stores;
    this.views  = this._getViews(routes);

    this.rootView   = routes.rootView;
    this.signInView = routes.signInView;

    this.isSignedIn = options.isSignedIn;

    pubsub.subscribe('auth.initial', () => startRouter(this.views, this.stores));
  }

  @action navigate(to, params = {}) {
    this.goTo(this.views[to], params);
  }

  @action redirectAfterSignIn() {
    this.beforeSignIn ?
      this.goTo(this.beforeSignIn.route, this.beforeSignIn.nextParams) :
      this.navigate(this.rootView);

    this.beforeSignIn = null;
  }

  @action navigateToSignIn() {
    this.navigate(this.signInView);
  }

  @action replaceUrlParamsForView(view, params) {
    return this.views[view].replaceUrlParams(params);
  }

  @action goTo(view, paramsObj, store = this.stores) {
    const currentParams = toJS(this.params);

    if (!this._checkBeforeExit(currentParams)) return;
    if (!this._checkAuth(view, paramsObj)) return;
    if (!this._checkBeforeEnter(view, currentParams, paramsObj)) return;

    this._performOnExit(currentParams);

    this.currentView = view;
    this.params      = toJS(paramsObj);

    this._performOnEnter();
  }

  _checkBeforeExit(params) {
    if (!this.currentView) return true;

    return this.currentView.beforeExit({
      route:  this.currentView,
      s:      this.stores,
      params
    });
  }

  @action _checkAuth(view, nextParams) {
    if (view.skipAuth) return true;

    if (!this.isSignedIn()) {
      this.beforeSignIn = { route: view, nextParams };
      this.navigateToSignIn();
      return false;
    }

    return true;
  }

  _checkBeforeEnter(view, params, nextParams) {
    return view.beforeEnter({ route: view, s: this.stores, params, nextParams });
  }

  _performOnExit(params) {
    if (!this.currentView) return;

    this.currentView.onExit({
      route: this.currentView,
      s:     this.stores,
      params
    });
  }

  _performOnEnter() {
    this.currentView.onEnter({
      route:  this.currentView,
      params: this.params,
      s:      this.stores
    });
  }

  _getViews(routes) {
    const views = {};

    Object.keys(routes.views).forEach(key => {
      const route = routes.views[key];
      route.layout = route.layout || routes.mainLayout;
      views[key] = new Route(route);
    });

    return views;
  }

}

export default new RouterStore();
