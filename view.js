const View = function (subscribeToStore, increase, decrease) {
  var value = null;

  // selecting div by ID
  var el = document.querySelector("#counter");
  // value displayed here
  var display = el.querySelector("span");
  var [increaseBtn, decreaseBtn] = Array.from(el.querySelectorAll("button"));

  // render value
  var render = () => (display.innerHTML = value);
  // update state. It will be called every time when the store changes
  var updateState = (store) => (value = store.getValue());

  // subscribe state to store. we pass these two functions to subscribeToStore
  // because we want to get the view updated and we want to get an initial rendering
  subscribeToStore([updateState, render]);

  // listen to button clicks
  increaseBtn.addEventListener("click", increase);
  decreaseBtn.addEventListener("click", decrease);
};

export default View;
