var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
      type: "GET",
      data: {bounds: bounds},
      url: "api/benches/",
      success: function(benches){
        ApiActions.receiveAll(benches)
      }
    })
  },

  createBench: function(){
    $.ajax({
      type: "POST",
      url: "api/benches/new/",
      success: function(bench){
        ApiActions.newBench(bench)
      }
    })
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
