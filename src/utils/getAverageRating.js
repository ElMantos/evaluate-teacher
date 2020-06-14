export default ratings => {
  const total = ratings.reduce((acc, curr) => acc + curr.stars, 0);
  return Math.round(total / ratings.length);
};
