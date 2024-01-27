const filterValidLines = (lines) => {
  return lines
    .split('\n')
    .filter(line => line.split(',').length === 4)
    .filter(line =>
      !line.split(',').some(word => word === '')
    );
};

module.exports = {
  filterValidLines,
}