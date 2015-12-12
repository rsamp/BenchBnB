var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      type: "GET",
      url: "api/benches",
      success: function(benches){
        console.log("test");
        ApiActions.receiveAll(benches);
      }
    });
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
