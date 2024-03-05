import { IFetchPictureAction } from '../../interfaces/IFetchPictureAction';
import { IFetchPictureFailureAction } from '../../interfaces/IFetchPictureFailureAction';
import { IFetchPictureSuccessAction } from '../../interfaces/IFetchPictureSuccessAction';
import { KeanuActionType } from './keanuActionTypes';

export const fetchPicture = (query: string): IFetchPictureAction => ({
  type: KeanuActionType.FETCH_PICTURE_REQUEST,
  payload: query,
});

export const fetchPictureSuccess = (picture: string): IFetchPictureSuccessAction => ({
  type: KeanuActionType.FETCH_PICTURE_SUCCESS,
  payload: picture,
});

export const fetchPictureFailure = (error: string): IFetchPictureFailureAction => ({
  type: KeanuActionType.FETCH_PICTURE_FAILURE,
  payload: error,
});

export type Action = IFetchPictureAction | IFetchPictureSuccessAction | IFetchPictureFailureAction;
