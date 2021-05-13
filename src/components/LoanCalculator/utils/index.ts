const listValuesByParams = (min: number, max: number, step: number): number[] => {
  const output = [];
  for (let i=min; i<=max; i+=step) {
    output.push(i);
  }

  return output;
};

export default {
  listValuesByParams,
};
