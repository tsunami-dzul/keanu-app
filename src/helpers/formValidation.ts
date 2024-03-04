import { IPictureSize } from '../interfaces/IPictureSize';

export const formValidation = (formItems: IPictureSize) => {
  if (formItems.width > 0 && formItems.height > 0) {
    return true;
  }

  return false;
};
