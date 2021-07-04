/**
 * The dispatcher needs to know two things - actions and stores.
 * The actions are simply forwarded to the stores so we don’t necessarily
 * have to keep them. The stores, however, should be tracked inside
 * the dispatcher so we can loop through them.
 *
 * It acts as a hub for all the events in the system. Its job is to receive
 * notifications that we call actions and pass them to all the stores.
 * The store decides if it is interesting or not and reacts by changing its
 * internal state/data. That change is triggering re-rendering of the views
 * which are (in our case) React components.
 *
 **/

var Dispatcher = function () {
  return {
    _stores: [],
    // throwing an error if no expected update method exists
    register: function (store) {
      this._stores.push({ store: store });
    },
    // check all stores for update
    dispatch: function (action) {
      if (this._stores.length > 0) {
        this._stores.forEach(function (entry) {
          entry.store.update(action);
        });
      }
    },
  };
};
