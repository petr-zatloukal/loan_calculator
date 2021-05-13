import utils from './index';

describe('Loan calculator utils', () => {
  test('listValuesByParams', () => {
    const data = utils.listValuesByParams(10, 50, 10);
    expect(data).toEqual([10, 20, 30, 40, 50]);
  });
});
