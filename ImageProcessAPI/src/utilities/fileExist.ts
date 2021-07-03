import { access } from 'fs/promises';
import { constants } from 'fs';

const fileExist = async (Path: string): Promise<boolean> => {
  try {
    await access(Path, constants.R_OK | constants.W_OK);
    console.log('Can access');
    return true;
  } catch (e) {
    return false;
  }
};

export default fileExist;
