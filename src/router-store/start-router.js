import { Router } from "director/build/director";
import { autorun } from "mobx";

const isObject = obj => obj && typeof obj === 'object' && !(Array.isArray(obj));
const getObjectKeys = obj => isObject(obj) ? Object.keys(obj) : [];

const viewsForDirector = (views, store) => getObjectKeys(views).reduce((obj, viewKey) => {
  const view = views[viewKey];
  obj[view.path] = (...paramsArr) => view.goTo(store, paramsArr);
  return obj;
}, {});

const createDirectorRouter = (views, store) => {
  new Router({
    ...viewsForDirector(views, store)
  }).configure({
    html5history: true
  }).init();
};

const startRouter = (views, store) => {
  //create director configuration
  createDirectorRouter(views, store);

  //autorun and watch for path changes
  autorun(() => {
    const { currentPath } = store.router;

    if (currentPath !== window.location.pathname) {
      window.history.pushState(null, null, currentPath);
    }
  });
};

export default startRouter;
