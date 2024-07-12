function callMe(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Called");
      res(true);
    }, delay);
  });
}
(async () => {
  const delays = [500, 1000, 1500];
  for (let delay of delays) {
    await callMe(delay);
  }
  console.log("Completed");
})();
