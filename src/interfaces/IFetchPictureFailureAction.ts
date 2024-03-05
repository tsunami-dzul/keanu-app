import { KeanuActionType } from '../store/keanu/keanuActionTypes';

export interface IFetchPictureFailureAction {
  type: KeanuActionType.FETCH_PICTURE_FAILURE;
  payload: string;
}
