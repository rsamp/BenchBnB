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

  createBench: function(bench){
    $.ajax({
      type: "POST",
      data: {bench: bench},
      url: "api/benches/",
      success: function(bench){
        ApiActions.newBench(bench)
      }
    })
  }
};

module.exports = ApiUtil;
