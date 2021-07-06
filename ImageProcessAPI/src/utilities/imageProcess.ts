import sharp from 'sharp';
import config from '../config';

const imageProcess = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    const imagePath = `${config.ASSETS_FOLDER}/full/${fileName}.jpg`;
    const outPutPath = `${config.ASSETS_FOLDER}/thumb/${fileName}${width}X${height}.jpg`;

    const sharpIt = await sharp(imagePath)
      .rotate()
      .resize({ width, height, fit: 'contain' })
      .toFile(outPutPath);
  } catch (e) {
    console.error('Error in imageProcess func', e);
    throw e;
  }
};

export default imageProcess;
