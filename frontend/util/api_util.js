var Dispatcher = require('../dispatcher/dispatcher'),
    ApiActions = require('../actions/api_actions'),
    BenchStore = require('../stores/bench');

ApiUtil = {
  fetchBenches: function(){
    $.get({
      url: "api/benches",
      success: function(benches){
        ApiActions.receiveAll(benches);
        BenchStore.all();
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
