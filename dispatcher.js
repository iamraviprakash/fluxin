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
    register: function (store) {
      // throw error if no update method exists
      if (!store || !store.update) {
        throw new Error(
          "You should provide a store that has an `update` method."
        );
      } else {
        var consumers = [];

        var change = function () {
          consumers.forEach(function (consumer) {
            consumer(store);
          });
        };

        // collect the consumer functions
        var subscribe = function (consumer, noInit) {
          consumers.push(consumer);
          !noInit ? consumer(store) : null;
        };

        this._stores.push({ store, change });
        return subscribe;
      }
    },
    // check all stores for update
    dispatch: function (action) {
      if (this._stores.length > 0) {
        this._stores.forEach(function (entry) {
          entry.store.update(action, entry.change);
        });
      }
    },
  };
};
