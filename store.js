export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

// returns updated value on state change
const CounterStore = {
  _data: { value: 0 },
  getValue: function () {
    return this._data.value;
  },
  update: function (action, change) {
    if (action.type === INCREASE) {
      this._data.value += 1;
    } else if (action.type === DECREASE) {
      this._data.value -= 1;
    }
    change();
  },
};

export default CounterStore;
