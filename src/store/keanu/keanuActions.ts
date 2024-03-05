const FETCH_PICTURE_REQUEST = 'FETCH_PICTURE_REQUEST';
const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS';
const FETCH_PICTURE_FAILURE = 'FETCH_PICTURE_FAILURE';

export const fetchPicture = () => ({
  type: FETCH_PICTURE_REQUEST,
});

export const fetchPictureSuccess = (picture: string) => ({
  type: FETCH_PICTURE_SUCCESS,
  payload: picture,
});

export const fetchPictureFailure = (error: string) => ({
  type: FETCH_PICTURE_FAILURE,
  payload: error,
});
