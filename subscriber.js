var createSubscriber = function (store) {
  return dispatcher.register(store);
};

export default createSubscriber;
