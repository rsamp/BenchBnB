var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
  },

  _onChange: function(){
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function(){
    this.benchListener = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.benchListener.remove();
  },

  render: function(){
    var benches = this.state.benches.map(function(bench, idx){
      return <div key={idx}>{bench.description}</div>;
    });

    return (
      <div>{benches}</div>
    );
  }
});

module.exports = Index;
