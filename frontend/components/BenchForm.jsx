var React = require('react'),
    ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({
  getInitialState: function(){
    return {lat: 0, lng: 0};
  },

  componentDidMount: function(){
    this.setState({lat: this.props.location.query.lat, lng: this.props.location.query.lng});
  },

  handleSubmit: function(e){
    e.preventDefault();

    var lat = e.target[0].value;
    var lng = e.target[1].value;
    var description = e.target[2].value;

    var newBench = {lat: lat, lng: lng, description: description};

    ApiUtil.createBench(newBench);
  },

  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Latitude:
          <input type="text" value={this.state.lat}/>
        </label>
        <label>
          Longitude:
          <input type="text" value={this.state.lng}/>
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
