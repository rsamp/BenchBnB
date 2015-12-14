var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchStore = new Store(AppDispatcher),
    BenchConstants = require('../constants/bench_constants');

var _benches = [];

BenchStore.all = function () {
  return _benches.slice(0);
};

var resetBenches = function(benches){
  _benches = benches;
};

var createBench = function(bench){
  _benches.push(bench);
}

BenchStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    case BenchConstants.NEW_BENCH:
      var result = createBench(payload.bench);
      BenchStore.__emitChange();
      break;
  }
};

// window.BenchStore = BenchStore;

module.exports = BenchStore;
