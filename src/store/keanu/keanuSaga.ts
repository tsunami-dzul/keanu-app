import { put, takeLatest } from 'redux-saga/effects';
import { fetchPictureFailure, fetchPictureSuccess } from './keanuActions';
import { getPictureService } from '../../services/picture.service';
import { IData } from '../../interfaces/IData';

function* getPicture(action: any) {
  try {
    const data: IData | null = yield getPictureService(action.payload);

    if (data) {
      yield put(fetchPictureSuccess(data?.keanu.image));
    }
  } catch (error) {
    const errorMessage = error as string;

    yield put(fetchPictureFailure(errorMessage));
  }
}

export function* watchGetPicture() {
  yield takeLatest('FETCH_PICTURE_REQUEST', getPicture);
}
