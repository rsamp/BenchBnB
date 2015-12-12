var React = require('react'),
    Map = require('./Map'),
    Index = require('./Index');

var Search = React.createClass({

  render: function(){
    return(
      <div>
        <Map/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
