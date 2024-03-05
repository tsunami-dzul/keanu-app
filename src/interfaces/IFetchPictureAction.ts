import { KeanuActionType } from '../store/keanu/keanuActionTypes';

export interface IFetchPictureAction {
  type: KeanuActionType.FETCH_PICTURE_REQUEST;
  payload: string;
}
