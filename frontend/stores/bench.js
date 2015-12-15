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
  _benches[bench.id] = bench;
}

BenchStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      break;
    case BenchConstants.NEW_BENCH:
      var result = createBench(payload.bench);
      break;
  }
  BenchStore.__emitChange();
};

module.exports = BenchStore;
