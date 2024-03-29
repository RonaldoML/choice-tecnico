const Response = import("express").Response
const { getFiles, getFile } = require("../network/file");
const { createFilesResponse } = require("../utils/process-files");
const { filterValidLines } = require("../utils/validations");


const getFilesController = async (req, res = Response) => {

  const { fileName } = req.query;

  try {

    let data = [fileName]

    if (!fileName) {
      const response = await getFiles();
      data = response.data.files;
    }

    const filesRequests = data.map(file => getFile(file));

    const filesResponse = await Promise.allSettled(filesRequests);

    const filteredFiles = filesResponse
      .filter(fileResponse => fileResponse.status === 'fulfilled')
      .map(fileResponse => fileResponse.value.data)
      .map(filterValidLines)
      .filter(lines => lines.length > 1);

    const files = createFilesResponse(filteredFiles);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (files.length === 0) {
      return res.status(404).json({
        files: []
      });
    }

    return res.status(200).json({
      files
    });

  } catch (_) {
    res.status(500).json({
      message: 'Internal server error.'
    });
  }
};

const getOriginalFileList = async (_, res = Response) => {
  try {
    const response = await getFiles();
    const files = response.data.files;

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return res.status(response.status).json({
      files
    });

  } catch (_) {
    res.status(500).json({
      message: 'Internal server error.'
    });
  }
};


module.exports = {
  getFilesController,
  getOriginalFileList,
};
