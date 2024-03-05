import { combineReducers } from 'redux';
import kanuReducer from './keanu/keanuReducer';

const reducers = combineReducers({
  keanu: kanuReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
