import fileExist from '../../utilities/fileExist';

describe('Tests for fileExist function', () => {
  const wrongPath = './assets/thumb/floer200X200.jpg';
  const rightPath = './assets/thumb/flower200X200.jpg';

  it('expects fileExist(rightPath) to be true', async () => {
    const result = await fileExist(rightPath);
    expect(result).toBeTrue();
  });

  it('expects fileExist(wrongPath) to be false', async () => {
    const result = await fileExist(wrongPath);
    expect(result).toBeFalse();
  });
});
