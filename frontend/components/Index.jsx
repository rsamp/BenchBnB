var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
    console.log(this.state.benches);
  },

  _onChange: function(){
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function(){
    BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function(){
    BenchStore.removeListener(this._onChange);
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
