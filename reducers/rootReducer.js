import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import StatesReducer from './statesReducer';
// import EntitiesReducer from './entities_reducer';
// import ErrorsReducer from './errors_reducer';
// import RemindersReducer from './reminders_reducer';
const config = {
  key: 'primary',
  storage
 }

const RootReducer = persistCombineReducers(
  config,
  {states: StatesReducer}
  // entities: EntitiesReducer,
  // errors: ErrorsReducer,
  // reminders: RemindersReducer
);

export default RootReducer;
