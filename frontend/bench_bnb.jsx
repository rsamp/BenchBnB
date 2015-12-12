var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./stores/bench'),
    ApiUtil = require('./util/api_util'),
    Search = require('./components/Search');

$(function(){
  var content = document.getElementById('content');
  ReactDOM.render(<Search/>, content);
});
