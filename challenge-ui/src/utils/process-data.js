export const getRows = (file) => {
  const title = file.file;
  return file.lines.map(line => ({
    name: title,
    ...line,
  }))
};