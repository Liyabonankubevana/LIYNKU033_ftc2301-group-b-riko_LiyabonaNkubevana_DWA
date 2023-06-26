// Action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Reducer function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}

// Store
class Store {
  constructor(reducer) {
    this.state = undefined;
    this.reducer = reducer;
    this.subscriptions = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscriptions.forEach(subscription => {
      subscription(this.state);
    });
  }

  subscribe(callback) {
    this.subscriptions.push(callback);
  }
}

// Create store instance
const store = new Store(counterReducer);

// Scenario 1: Logging initial state
console.log('Scenario 1: Logging initial state');
console.log(store.getState()); // Expected: 0

// Scenario 2: Increment the counter by one
console.log('\nScenario 2: Increment the counter by one');
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
console.log(store.getState()); // Expected: 2

// Scenario 3: Decrement the counter by one
console.log('\nScenario 3: Decrement the counter by one');
store.dispatch({ type: SUBTRACT });
console.log(store.getState()); // Expected: 1

// Scenario 4: Resetting the Tally Counter
console.log('\nScenario 4: Resetting the Tally Counter');
store.dispatch({ type: RESET });
console.log(store.getState()); // Expected: 0
