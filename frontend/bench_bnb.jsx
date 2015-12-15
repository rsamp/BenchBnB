var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    BenchStore = require('./stores/bench'),
    Search = require('./components/Search');
    BenchForm = require('./components/BenchForm');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <a href='/'><header><h1>Bench BnB</h1></header></a>
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
);


$(function(){
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
})
