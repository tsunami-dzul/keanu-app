import { IPictureSize } from '../interfaces/IPictureSize';

export const formValidation = (formItems: IPictureSize) => {
  if (formItems.width > 0 && formItems.height > 0) {
    return true;
  }

  return false;
};

export const sizeValidation = (formItems: IPictureSize) => {
  if (formItems.width >= 800 || formItems.height >= 800) {
    return false;
  }

  return true;
};
