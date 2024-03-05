import { IKeanuState } from '../../interfaces/IKeanuState';
import { KeanuActionType } from './keanuActionTypes';
import { Action } from './keanuActions';

const initialState = {
  loading: false,
  picture: '',
  error: null,
};

const kanuReducer = (state: IKeanuState = initialState, action: Action): IKeanuState => {
  switch (action.type) {
    case KeanuActionType.FETCH_PICTURE_REQUEST:
      return {
        loading: true,
        error: null,
        picture: null,
      };
    case KeanuActionType.FETCH_PICTURE_SUCCESS:
      return {
        loading: false,
        error: null,
        picture: action.payload,
      };
    case KeanuActionType.FETCH_PICTURE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        picture: '',
      };
    default:
      return state;
  }
};

export default kanuReducer;
