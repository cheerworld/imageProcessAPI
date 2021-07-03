import express from 'express';
import imageProcess from '../../utilities/imageProcess';
import fileExist from '../../utilities/fileExist';
import config from '../../config';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const fileName = req.query.filename as string;
      const outputFile = `${config.ASSETS_FOLDER}/thumb/${req.query.filename}${req.query.width}X${req.query.height}.jpg`;

      const width = parseInt(req.query.width as unknown as string) || null;
      const height = parseInt(req.query.height as unknown as string) || null;
      const imagePath = `${config.ASSETS_FOLDER}/full/${fileName}.jpg`;

      const exist = await fileExist(imagePath);
      if (exist) {
        if (width && height) {
          if (width > 0 && height > 0) {
            await imageProcess(fileName, width, height);

            res.status(200).sendFile(outputFile);
            return;
          }
          res.send(
            'Please enter numbers for both width and height that are above 0'
          );
        } else {
          res.send(
            'Please enter valid numbers for width and height. Such as: http://localhost:3000/api/images?filename=flower&width=200&height=200'
          );
        }
      } else {
        res.send(
          'Invalid file name, not found. Please enter a valid file name. Such as: http://localhost:3000/api/images?filename=flower&width=200&height=200'
        );
      }
    } catch (e) {
      console.error('error in getting images path', e);
    }
  }
);

export { images, imageProcess };
