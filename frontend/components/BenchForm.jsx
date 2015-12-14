var React = require('react'),
    ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({

  createBench: function(e){
    console.log(e);
  },

  render: function(){
    return(
      <form onSubmit={this.createBench}>
        <label>
          Latitude:
          <input type="text"/>
        </label>
        <label>
          Longitude:
          <input type="text"/>
        </label>
        <label>
          Description:
          <textarea></textarea>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

module.exports = BenchForm;
