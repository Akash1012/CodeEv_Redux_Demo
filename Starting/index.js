const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_IceCreams = "BUY_IceCreams";

function buyCake() {
  console.log("1");
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
}

function buyIceCreams() {
  return {
    type: BUY_IceCreams
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// };

const initialCakeState = {
  numOfCakes: 10
};

const initialIceCreamState = {
  numOfIceCreams: 20
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_IceCreams:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   console.log("2");
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       };
//     case BUY_IceCreams:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubscribe();
