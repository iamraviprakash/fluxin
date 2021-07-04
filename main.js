import { create } from "./dispatcher";
import View from "./view";
import CounterStore, { INCREASE, DECREASE } from "./store";

const { createAction, createSubscriber } = create();
const counterStoreSubscriber = createSubscriber(CounterStore);

// create `increase`, `decrease` actions to cause a state change
const actions = {
  increase: createAction(INCREASE),
  decrease: createAction(DECREASE),
};

View(counterStoreSubscriber, actions.increase, actions.decrease);
