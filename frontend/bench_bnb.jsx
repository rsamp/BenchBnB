var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    BenchStore = require('./stores/bench'),
    Search = require('./components/Search'),
    BenchForm = require('./components/BenchForm');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="api/benches/new" component={BenchForm}/>
  </Route>
)

var root = document.getElementById('content');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Search/>, root);
})
