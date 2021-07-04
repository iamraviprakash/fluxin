/**
 * The actions are simple objects having two properties - type and payload
 * The type says what exactly the action is and the payload contains the
 * information associated with the event. And in some cases, we may leave the
 * payload empty.
 *
 * Following benefits:
 * - We need not to remember the exact type of the action. We now have a
 *   function which we call passing only the payload.
 * - We don’t need an access to the dispatcher anymore which is a huge
 *   benefit. Otherwise, think about how we have to pass it to every single
 *   place where we need to dispatch an action.
 * - In the end, we don’t have to deal with objects but with functions which is
 *   much nicer. The objects are static while the functions describe a process.
 *
 **/

var createAction = function (type) {
  // actions must have a type
  if (!type) {
    throw new Error("Please, provide action's type.");
  } else {
    return function (payload) {
      // pass action to dispatcher
      return dispatcher.dispatch({
        type: type,
        payload: payload,
      });
    };
  }
};

export default createAction;
