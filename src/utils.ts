export const getElapsedTime = (startTime: number) => Date.now() - startTime;

export const getSleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
