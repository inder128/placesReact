import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import history from '../history';

import PlaceCreate from "./places/PlaceCreate";
import PlaceDelete from "./places/PlaceDelete";
import PlaceList from "./places/PlaceList";
import PlaceEdit from "./places/PlaceEdit";
import PlaceShow from "./places/PlaceShow";
import Header from "./header/Header";
import HomeHeader from "./header/HomeHeader";

import { currentPathAction } from "../actions";


class App extends React.Component {
  render() {
    console.log("AppRender");
    return (
      <Router history={history}>
        {/* cannot use window.location.pathname here because below part will not render after rerouting if used; */}
        {this.props.currentPath === "/" 
            ? <HomeHeader /> 
            : <Header extraClasses={`fixed borderless`} />
        }
        {/* giving padding so that it doesn't hide behind fixed menu; */}
        <div className="ui container" style={{ paddingTop: "5em" }}>
          <Switch>
            <Route path="/" exact component={PlaceList} />
            <Route path="/place/new" exact component={PlaceCreate} />
            <Route path="/place/edit/:id" exact component={PlaceEdit} />
            <Route path="/place/delete/:id" exact component={PlaceDelete} />
            <Route path="/place/:id" exact component={PlaceShow} />
          </Switch>
          <div>
            <img src="https://i.redd.it/zs8eyrayjpm41.png" />
            <img src="https://i.redd.it/zs8eyrayjpm41.png" />
            <img src="https://i.redd.it/zs8eyrayjpm41.png" />
            <img src="https://i.redd.it/zs8eyrayjpm41.png" />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentPath : state.currentPath };
}

export default connect(mapStateToProps, { currentPathAction })(App);