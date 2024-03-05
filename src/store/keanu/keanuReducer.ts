const initialState = {
  loading: false,
  picture: null,
  error: null,
};

const kanuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_PICTURE_REQUEST':
      return {
        loading: true,
        error: null,
        picture: null,
      };
    case 'FETCH_PICTURE_SUCCESS':
      return {
        loading: false,
        error: null,
        picture: action.payload,
      };
    case 'FETCH_PICTURE_FAILURE':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default kanuReducer;
