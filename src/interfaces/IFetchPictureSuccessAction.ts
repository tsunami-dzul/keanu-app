import { KeanuActionType } from '../store/keanu/keanuActionTypes';

export interface IFetchPictureSuccessAction {
  type: KeanuActionType.FETCH_PICTURE_SUCCESS;
  payload: string;
}
