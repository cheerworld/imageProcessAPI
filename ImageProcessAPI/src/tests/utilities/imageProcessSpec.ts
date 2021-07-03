import imageProcess from '../../utilities/imageProcess';

describe('Tests for imageProcess function', () => {
  it('expects imageProcess("flower", 200, 200) to be resolved', async () => {
    await expectAsync(imageProcess('flower', 200, 200)).toBeResolved();
  });

  it('expects imageProcess("floer", 200, 200) to be rejected', async () => {
    await expectAsync(imageProcess('floer', 200, 200)).toBeRejected();
  });
});
