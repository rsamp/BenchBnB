var React = require('react'),
    Map = require('./Map'),
    Index = require('./Index');

var Search = React.createClass({
  clickMapHandler: function(coords){
    var url = "/api/benches/new"
    this.props.history.pushState(null, url, coords)
  },

  render: function(){
    return(
      <div>
        <Map onClick={this.clickMapHandler}/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
