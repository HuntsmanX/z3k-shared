import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Router extends Component {

  render() {
    const { routerStore: { currentView } } = this.props;

    if (!currentView) return <div />;

    const Layout    = currentView.layout;
    const Component = currentView.component;

    return (
      <Layout>
        <Component />
      </Layout>
    );
  }

}

export default Router;
