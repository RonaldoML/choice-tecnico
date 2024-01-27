const createFilesResponse = (filteredFiles) => {
  return filteredFiles.reduce((acc, elem) => {

    const [_, ...lines] = elem;

    const newFile = {
      file: '',
      lines: [],
    };

    lines.forEach((line) => {

      const rows = line.split(',');

      newFile.file = rows[0];

      newFile.lines.push({
        text: rows[1],
        number: parseInt(rows[2]),
        hex: rows[3],
      });

    });

    acc.push(newFile);

    return acc;
  }, []);
}

module.exports = {
  createFilesResponse
}