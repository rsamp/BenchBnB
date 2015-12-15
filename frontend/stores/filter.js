var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterStore = new Store(AppDispatcher),
    FilterConstants = require('../constants/filter_constants');

var _filters = [];

FilterStore.all = function () {
  return _filters.slice(0);
};

var resetFilters = function(filters){
  _filters = filters;
};

var createFilter = function(filter){
  _filters[filter.id] = filter;
}

FilterStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FilterConstants.BENCHES_RECEIVED:
      var result = resetFilters(payload.filters);
      break;
    case FilterConstants.NEW_BENCH:
      var result = createFilter(payload.filter);
      break;
  }
  FilterStore.__emitChange();
};

module.exports = FilterStore;
