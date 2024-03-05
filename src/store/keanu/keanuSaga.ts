import { put, takeLatest } from 'redux-saga/effects';
import { Action, fetchPictureFailure, fetchPictureSuccess } from './keanuActions';
import { getPictureService } from '../../services/picture.service';
import { IData } from '../../interfaces/IData';
import { KeanuActionType } from './keanuActionTypes';

function* getPicture(action: Action) {
  try {
    const data: IData | null = yield getPictureService(action.payload);

    if (data) {
      yield put(fetchPictureSuccess(data?.keanu.image));
    }
  } catch (error) {
    console.log(error);

    yield put(fetchPictureFailure('There was an unexpected error. Please contact the administrator'));
  }
}

export function* watchGetPicture() {
  yield takeLatest(KeanuActionType.FETCH_PICTURE_REQUEST, getPicture);
}
