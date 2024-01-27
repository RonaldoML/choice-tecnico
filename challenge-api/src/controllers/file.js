const Response = import("express").Response
const { getFiles, getFile } = require("../network/file");
const { filterValidLines } = require("../utils/validations");


const getFilesController = async (_, res = Response) => {
  try {

    const response = await getFiles();
    const data = response.data.files;

    const filesRequests = data.map(file => getFile(file));

    const filesResponse = await Promise.allSettled(filesRequests);

    const filesData = filesResponse
      .filter(fileResponse => fileResponse.status === 'fulfilled')
      .map(fileResponse => fileResponse.value.data)
      .map(filterValidLines)
      .filter(lines => lines.length > 1);

    const files = filesData.reduce((acc, elem) => {

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
          number: rows[2],
          hex: rows[3],
        });

      });

      acc.push(newFile);

      return acc;
    }, []);

    return res.status(200).json({
      files
    });

  } catch (_) {
    res.status(500).json({
      message: 'Internal server error.'
    });
  }
};

module.exports = {
  getFilesController
};
