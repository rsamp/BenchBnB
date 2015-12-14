var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var Map = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
  },

  createMarker: function(bench){
    var marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });
  },

  _onChange: function(){
    this.setState({ benches: BenchStore.all()});
  },

  listenForMove: function(){
    google.maps.event.addListener(this.map, 'idle', function(){
      var bounds = this.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      var boundsObj = { "northEast":
                            {"lat": northEast.lat(), "lng": northEast.lng()},
                        "southWest":
                            {"lat": southWest.lat(), "lng": southWest.lng()}}
      ApiUtil.fetchBenches(boundsObj);
    }.bind(this));
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.listenForMove();
    BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    BenchStore.removeListener(this._onChange);
  },

  render: function(){
    this.state.benches.forEach(function(bench){
      this.createMarker(bench);
    }.bind(this));
    return(
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
